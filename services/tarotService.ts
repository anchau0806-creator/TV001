
import { TAROT_DECK } from '../constants';
import type { TarotCard, DrawnCard, ReadingDeck } from '../types';

const REVERSAL_CHANCE = 0.2; // 20%

// Fisher-Yates shuffle algorithm
const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const drawCards = (count: number, deckType: ReadingDeck = 'full'): DrawnCard[] => {
  let deckToUse: TarotCard[];

  switch (deckType) {
    case 'major':
      deckToUse = TAROT_DECK.filter(card => card.arcana === 'Major');
      break;
    case 'minor':
      deckToUse = TAROT_DECK.filter(card => card.arcana === 'Minor');
      break;
    case 'full':
    default:
      deckToUse = [...TAROT_DECK];
  }

  // If requested count is larger than available cards, just return all available.
  const finalCount = Math.min(count, deckToUse.length);
  const shuffledDeck = shuffle(deckToUse);
  const drawn: DrawnCard[] = [];
  
  for (let i = 0; i < finalCount; i++) {
    if (shuffledDeck.length > 0) {
      const card = shuffledDeck.pop() as TarotCard;
      drawn.push({
        card,
        isReversed: Math.random() < REVERSAL_CHANCE,
      });
    }
  }
  
  return drawn;
};