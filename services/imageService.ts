import type { Reading, Skin, Language, CachedImages, Theme } from '../types';
import { UI_TEXT } from '../constants';

interface GenerateImageOptions {
  reading: Reading;
  skin: Skin;
  language: Language;
  t: (typeof UI_TEXT)['vi'];
  cachedImages: CachedImages;
}

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (src.startsWith('http')) {
      img.crossOrigin = 'anonymous';
    }
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(new Error(`Failed to load image: ${src.substring(0, 100)}...`));
    img.src = src;
  });
};

const wrapText = (
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
): number => {
  const words = text.replace(/\n/g, ' \n ').split(' ');
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    if (words[n] === '\n') {
      context.fillText(line, x, currentY);
      line = '';
      currentY += lineHeight;
      continue;
    }
    const testLine = line + words[n] + ' ';
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, currentY);
  return currentY;
};

export const generateReadingImage = async (options: GenerateImageOptions): Promise<string> => {
  const { reading, skin, t, language, cachedImages } = options;
  
  await document.fonts.ready;

  const canvas = document.createElement('canvas');
  const PADDING = 60;
  const CARD_WIDTH = 200;
  const CARD_HEIGHT = 350;
  const GAP = 20;

  canvas.width = 1200;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error("Could not get canvas context");

  const computedStyle = getComputedStyle(document.body);
  const bgColor = computedStyle.getPropertyValue('--color-bg').trim() || '#0f172a';
  const textColor = computedStyle.getPropertyValue('--color-text').trim() || '#e2e8f0';
  const primaryColor = computedStyle.getPropertyValue('--color-primary').trim() || '#818cf8';
  const mutedColor = computedStyle.getPropertyValue('--color-text-muted').trim() || '#94a3b8';

  const cardImageSources = reading.cards.map(drawnCard => {
      if (skin.id === 'default' || !cachedImages[skin.id]?.[drawnCard.card.id]) {
          return drawnCard.card.imageUrl;
      }
      return `data:image/jpeg;base64,${cachedImages[skin.id][drawnCard.card.id]}`;
  });

  const loadedImages = await Promise.all(cardImageSources.map(loadImage));

  let currentY = PADDING;

  // Measure content height before drawing
  // Header
  currentY += 60 + 80;

  // Cards
  const cardsPerRow = Math.floor((canvas.width - 2 * PADDING + GAP) / (CARD_WIDTH + GAP));
  const numRows = Math.ceil(reading.cards.length / cardsPerRow);
  currentY += 50 + numRows * (CARD_HEIGHT + 80);
  
  // Interpretation title
  currentY += 50;

  // Interpretation text
  ctx.font = '22px "Nunito Sans"';
  const tempY = wrapText(ctx, reading.interpretation, PADDING, currentY, canvas.width - 2 * PADDING, 32);
  currentY = tempY + 50;
  
  // Footer
  currentY += PADDING;
  canvas.height = currentY;

  // --- Start Drawing ---
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  currentY = PADDING;

  ctx.fillStyle = primaryColor;
  ctx.font = 'bold 48px "Playfair Display"';
  ctx.textAlign = 'center';
  ctx.fillText(t.yourReadingFor + " " + reading.userInfo.name, canvas.width / 2, currentY);
  currentY += 60;

  ctx.fillStyle = textColor;
  ctx.font = '24px "Nunito Sans"';
  ctx.fillText(`${t.topic}: ${reading.topic}`, canvas.width / 2, currentY);
  currentY += 80;

  ctx.fillStyle = primaryColor;
  ctx.font = 'bold 32px "Playfair Display"';
  ctx.textAlign = 'left';
  ctx.fillText(t.cardsDrawn, PADDING, currentY);
  currentY += 50;

  let cardX = PADDING;
  let cardY = currentY;

  reading.cards.forEach((drawnCard, index) => {
    const img = loadedImages[index];
    ctx.save();
    if(drawnCard.isReversed) {
      ctx.translate(cardX + CARD_WIDTH / 2, cardY + CARD_HEIGHT / 2);
      ctx.rotate(Math.PI);
      ctx.drawImage(img, -CARD_WIDTH / 2, -CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
    } else {
      ctx.drawImage(img, cardX, cardY, CARD_WIDTH, CARD_HEIGHT);
    }
    ctx.restore();
    
    ctx.fillStyle = textColor;
    ctx.font = 'bold 18px "Nunito Sans"';
    ctx.textAlign = 'center';
    ctx.fillText(drawnCard.card.name[language], cardX + CARD_WIDTH / 2, cardY + CARD_HEIGHT + 25);
    
    if (drawnCard.isReversed) {
        ctx.fillStyle = mutedColor;
        ctx.font = 'italic 16px "Nunito Sans"';
        ctx.fillText(`(${t.reversed})`, cardX + CARD_WIDTH / 2, cardY + CARD_HEIGHT + 50);
    }

    cardX += CARD_WIDTH + GAP;
    if ((index + 1) % cardsPerRow === 0 && index + 1 < reading.cards.length) {
        cardX = PADDING;
        cardY += CARD_HEIGHT + 80;
    }
  });

  currentY = cardY + CARD_HEIGHT + 120;
  
  ctx.fillStyle = primaryColor;
  ctx.font = 'bold 32px "Playfair Display"';
  ctx.textAlign = 'left';
  ctx.fillText(t.interpretation, PADDING, currentY);
  currentY += 50;

  ctx.fillStyle = textColor;
  ctx.font = '22px "Nunito Sans"';
  ctx.textAlign = 'left';
  const newY = wrapText(ctx, reading.interpretation, PADDING, currentY, canvas.width - 2 * PADDING, 32);
  currentY = newY + 50;

  ctx.fillStyle = mutedColor;
  ctx.font = 'italic 16px "Nunito Sans"';
  ctx.textAlign = 'center';
  ctx.fillText("Generated by Tarot4u", canvas.width / 2, currentY);

  return canvas.toDataURL('image/png');
};
