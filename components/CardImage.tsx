import React, { useState, useEffect } from 'react';
import type { TarotCard, Skin } from '../types';
import { useAppContext } from '../App';

interface CardImageProps {
  card: TarotCard;
  skin: Skin;
  language: 'vi' | 'en';
  isReversed?: boolean;
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({ card, skin, language, isReversed = false, className = '' }) => {
  const { cachedImages, settings, userImages } = useAppContext();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);

    if (skin.id === 'custom') {
      const userImageId = settings.customSkinMap[card.id];
      if (userImageId) {
        const userImage = userImages.find(img => img.id === userImageId);
        if (userImage) {
          setImageUrl(userImage.dataUrl);
          return;
        }
      }
      // Fallback for custom skin if no image is assigned: use default.
      setImageUrl(card.imageUrl);
      return;
    }
    
    if (skin.id === 'default') {
      setImageUrl(card.imageUrl);
      return;
    }
      
    const skinCache = cachedImages[skin.id] || {};
    const cachedImage = skinCache[card.id];

    if (cachedImage) {
      setImageUrl(`data:image/jpeg;base64,${cachedImage}`);
    } else {
      // Reset if not found in cache for this skin/card combo
      setImageUrl(null); 
    }
  }, [card, skin, cachedImages, settings.customSkinMap, userImages]);

  const handleImageError = () => {
    console.warn(`Failed to load image for ${card.name.en}: ${imageUrl}`);
    setImageFailed(true);
  };

  return (
    <div className={`aspect-[2/3.5] w-full bg-[var(--color-surface)] rounded-lg shadow-lg flex items-center justify-center border-2 border-[var(--color-border)] overflow-hidden ${className}`}>
      {imageUrl && !imageFailed ? (
        <img
          src={imageUrl}
          alt={card.name[language]}
          className={`w-full h-full object-cover transition-transform duration-500 ${isReversed ? 'rotate-180' : ''}`}
          onError={handleImageError}
        />
      ) : (
        <div className="text-center p-2 text-[var(--color-text-muted)]">
            <i className={`fas ${imageFailed ? 'fa-image-slash' : 'fa-question-circle'} text-4xl`}></i>
        </div>
      )}
    </div>
  );
};

export default CardImage;