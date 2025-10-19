export type Language = 'vi' | 'en';

export type View = 'home' | 'reading' | 'wiki' | 'skins' | 'settings';

export interface TarotCard {
  id: string;
  arcana: 'Major' | 'Minor';
  suit: 'Wands' | 'Cups' | 'Swords' | 'Pentacles' | 'nan';
  name: {
    vi: string;
    en: string;
  };
  meaningUpright: {
    vi: string;
    en: string;
  };
  meaningReversed: {
    vi: string;
    en: string;
  };
  imageUrl: string;
}

export interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
}

export type SkinTheme = 'default' | 'humor' | 'fantasy' | 'wuxia' | 'anime' | 'cute_animals' | 'custom';

export interface Skin {
  id: SkinTheme;
  name: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  previewImage: string;
}

export interface UserInfo {
  name: string;
  dob: string;
  gender: 'male' | 'female' | 'other' | '';
}

export interface Reading {
  id: string;
  date: string;
  userInfo: UserInfo;
  topic: string;
  cards: DrawnCard[];
  interpretation: string;
}

export interface QuotaUsage {
  date: string; // YYYY-MM-DD
  interpretations: number;
  images: number;
}

// FIX: An interface cannot be a union type. Changed `interface` to `type` to correctly define the HistoryItem union type.
export type HistoryItem = Reading | { id: string; usefulness: number };

export interface CachedImages {
    [key: string]: { [key:string]: string };
}

export interface AppNotification {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export interface FactEntry {
  date: string; // YYYY-MM-DD
  lang: Language;
  facts: string[];
}

export interface AssistantMessage {
  id: number;
  role: 'user' | 'model';
  content: string;
}

export interface UserImage {
  id: string;
  name: string;
  dataUrl: string;
}

export type CustomSkinMap = {
  [cardId: string]: string; // card.id -> userImage.id
};


// Settings Types
export type AssistantStylePreset = 'default' | 'anh' | 'chi' | 'em' | 'ban';
export interface CustomAssistantStyle {
  custom: string;
}
export type AssistantStyle = AssistantStylePreset | CustomAssistantStyle;
    
export type ReadingDeck = 'full' | 'major' | 'minor';

export type ReadingStyle = 'accurate' | 'balanced' | 'positive' | 'concise' | 'detailed';

export type MusicTheme = 'none' | 'dreamy' | 'warm' | 'deep' | 'mystery' | 'nostalgic' | 'exotic' | 'ancient';

export type Theme = 'mysterious' | 'warm' | 'vibrant' | 'gentle' | 'dynamic';

export type BackgroundTheme = 'none' | 'cute_cat' | 'sun_moon' | 'lmamc' | 'destiny';

export interface Settings {
  assistantModel: string;
  assistantStyle: AssistantStyle;
  readingDeck: ReadingDeck;
  readingStyle: ReadingStyle[];
  readingModel: string;
  musicTheme: MusicTheme;
  musicVolume: number; // 0 to 1
  theme: Theme;
  background: BackgroundTheme;
  customSkinMap: CustomSkinMap;
}