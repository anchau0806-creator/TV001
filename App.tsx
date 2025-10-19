import React, { useState, createContext, useContext, useCallback, useEffect, useRef } from 'react';
import type { View, Language, UserInfo, SkinTheme, Reading, HistoryItem, Skin, CachedImages, QuotaUsage, AppNotification, FactEntry, AssistantMessage, Settings, UserImage } from './types';
import { SKINS, UI_TEXT, DEFAULT_SETTINGS, MUSIC_TRACKS, BACKGROUNDS } from './constants';
import useLocalStorage from './hooks/useLocalStorage';
import useQuota from './hooks/useQuota';
import useDailyFacts from './hooks/useDailyFacts';

// Screens
import HomeScreen from './screens/HomeScreen';
import ReadingScreen from './screens/ReadingScreen';
import WikiScreen from './screens/WikiScreen';
import SkinScreen from './screens/SkinScreen';
import SettingsScreen from './screens/SettingsScreen';
import ScrollToTopButton from './components/ScrollToTopButton';
import Assistant from './components/Assistant';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  view: View;
  setView: (view: View) => void;
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo | ((val: UserInfo) => UserInfo)) => void;
  history: HistoryItem[];
  viewingReading: Reading | null;
  setViewingReading: (reading: Reading | null) => void;
  addHistory: (reading: Reading) => void;
  updateHistory: (updatedHistory: HistoryItem[]) => void;
  currentSkin: Skin;
  setCurrentSkinId: (themeId: SkinTheme) => void;
  cachedImages: CachedImages;
  setCachedImages: (value: CachedImages | ((val: CachedImages) => CachedImages)) => void;
  quotaUsage: QuotaUsage;
  incrementInterpretationUsage: (amount?: number) => void;
  incrementImageUsage: (amount?: number) => void;
  notifications: AppNotification[];
  addNotification: (message: string, type?: AppNotification['type']) => void;
  t: (typeof UI_TEXT)['vi'];
  dailyFacts: string[];
  areFactsLoading: boolean;
  isAssistantOpen: boolean;
  setIsAssistantOpen: (isOpen: boolean) => void;
  assistantMessages: AssistantMessage[];
  setAssistantMessages: (messages: AssistantMessage[] | ((prev: AssistantMessage[]) => AssistantMessage[])) => void;
  resetAssistant: () => void;
  settings: Settings;
  setSettings: (value: Settings | ((val: Settings) => Settings)) => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean | ((val: boolean) => boolean)) => void;
  userImages: UserImage[];
  setUserImages: (value: UserImage[] | ((val: UserImage[]) => UserImage[])) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const NotificationArea: React.FC = () => {
    const { notifications } = useAppContext();

    if (!notifications.length) return null;

    return (
        <div aria-live="polite" aria-atomic="true" className="fixed bottom-8 right-4 sm:right-8 z-[100] w-full max-w-xs space-y-3">
            {notifications.map(n => (
                <div key={n.id} role="status" className="bg-[var(--color-surface-light)] text-[var(--color-text)] p-4 rounded-lg shadow-2xl border border-[var(--color-border)] animate-fade-in-up flex items-start space-x-3">
                    <span className={`text-xl ${n.type === 'warning' ? 'text-[var(--color-warning)]' : 'text-[var(--color-primary)]'} pt-1`}>
                        <i className={`fas ${n.type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}`}></i>
                    </span>
                    <p className="text-sm flex-1">{n.message}</p>
                </div>
            ))}
        </div>
    );
};

const App: React.FC = () => {
  const [language, setLanguage] = useLocalStorage<Language>('tarot-lang', 'vi');
  const [view, _setView] = useState<View>('home');
  const [userInfo, setUserInfo] = useLocalStorage<UserInfo>('tarot-userInfo', { name: '', dob: '', gender: '' });
  const [history, setHistory] = useLocalStorage<HistoryItem[]>('tarot-history', []);
  const [currentSkinId, setCurrentSkinId] = useLocalStorage<SkinTheme>('tarot-skin', 'fantasy');
  const [viewingReading, setViewingReading] = useState<Reading | null>(null);
  const [quotaUsage, incrementQuota] = useQuota();
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const t = UI_TEXT[language];
  const { dailyFacts, isLoading: areFactsLoading } = useDailyFacts(language);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantMessages, setAssistantMessages] = useState<AssistantMessage[]>([]);
  const [settings, setSettings] = useLocalStorage<Settings>('tarot-settings', DEFAULT_SETTINGS);
  const [userImages, setUserImages] = useLocalStorage<UserImage[]>('tarot-user-images', []);

  const [isMuted, setIsMuted] = useLocalStorage<boolean>('tarot-music-muted', true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const bgClearTimeoutId = useRef<number | null>(null);
  
  // Navigation function that pushes state to browser history
  const setView = useCallback((newView: View) => {
    const currentHistoryView = window.history.state?.view;
    if (currentHistoryView !== newView) {
        window.history.pushState({ view: newView }, '');
    }
    _setView(newView);
  }, []);

  // Effect to handle browser back/forward navigation and initial state
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
        const stateView = event.state?.view as View;
        if (stateView && ['home', 'reading', 'wiki', 'skins', 'settings'].includes(stateView)) {
            if (stateView === 'home') {
                setViewingReading(null);
            }
            _setView(stateView);
        } else {
            // Default to home if state is invalid or null
            _setView('home');
            setViewingReading(null);
        }
    };

    window.addEventListener('popstate', handlePopState);

    // On initial load, sync view with history state or set initial state.
    const initialHistoryView = window.history.state?.view as View;
    if (initialHistoryView && ['home', 'reading', 'wiki', 'skins', 'settings'].includes(initialHistoryView)) {
        _setView(initialHistoryView);
    } else {
        window.history.replaceState({ view: 'home' }, '');
        _setView('home');
    }
    
    return () => window.removeEventListener('popstate', handlePopState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync mute state and volume on initial load
  useEffect(() => {
    if (isMuted && settings.musicVolume !== 0) {
      setSettings(s => ({ ...s, musicVolume: 0 }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only on mount

  const handleMuteToggle = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    if (newMuteState) {
      // Muting
      setSettings(s => ({ ...s, musicVolume: 0 }));
    } else {
      // Unmuting, set to 50%
      setSettings(s => ({ ...s, musicVolume: 0.5 }));
    }
  };


  const resetAssistant = useCallback(() => {
    const welcomeMessage = { id: 1, role: 'model' as const, content: t.assistantWelcome };
    setAssistantMessages([welcomeMessage]);
  }, [t.assistantWelcome]);
  
  useEffect(() => {
    document.body.setAttribute('data-theme', settings.theme);
  }, [settings.theme]);
  
  // Effect to dynamically adjust surface opacity for readability
  useEffect(() => {
      const root = document.documentElement;
      const hasBackground = settings.background !== 'none';
      
      // Base opacity: more opaque if there's a background, less if not.
      let surfaceOpacity = hasBackground ? 0.85 : 0.6;
      
      // Fine-tuning for specific themes that might have lower contrast
      if (['warm', 'gentle'].includes(settings.theme)) {
          surfaceOpacity = Math.min(1, surfaceOpacity + 0.05);
      }

      root.style.setProperty('--opacity-surface', String(surfaceOpacity));
      
  }, [settings.background, settings.theme]);


  useEffect(() => {
    const bgElement = document.getElementById('background-layer');
    if (!bgElement) return;

    if (bgClearTimeoutId.current) {
        clearTimeout(bgClearTimeoutId.current);
        bgClearTimeoutId.current = null;
    }

    const selectedBg = BACKGROUNDS.find(bg => bg.id === settings.background);

    if (selectedBg && selectedBg.url) {
        bgElement.style.backgroundImage = `url(${selectedBg.url})`;
        bgElement.style.opacity = '1';
    } else {
        bgElement.style.opacity = '0';
        bgClearTimeoutId.current = window.setTimeout(() => {
            bgElement.style.backgroundImage = 'none';
            bgClearTimeoutId.current = null;
        }, 700); // match CSS transition duration
    }
  }, [settings.background]);

  useEffect(() => {
    const welcomeMessage = { id: 1, role: 'model' as const, content: t.assistantWelcome };
    setAssistantMessages(prev => {
        if (prev.length === 0) {
            return [welcomeMessage];
        }
        if (prev[0]?.id === 1) {
            const updatedMessages = [...prev];
            updatedMessages[0].content = welcomeMessage.content;
            return updatedMessages;
        }
        return prev;
    });
  }, [t.assistantWelcome]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const selectedTrack = MUSIC_TRACKS.find(t => t.id === settings.musicTheme);
    
    audio.volume = settings.musicVolume;

    if (!isMuted && selectedTrack) {
        if (audio.src !== selectedTrack.url) {
            audio.src = selectedTrack.url;
        }
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Audio playback was prevented by the browser. User interaction is needed.");
            });
        }
    } else {
        audio.pause();
        if (!selectedTrack) {
            audio.src = '';
        }
    }
  }, [settings.musicTheme, settings.musicVolume, isMuted]);

  const addNotification = useCallback((message: string, type: AppNotification['type'] = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev.filter(n => n.message !== message), { id, message, type }]);
    setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    }, 6000);
  }, []);

  const onPruneCallback = useCallback(() => {
    addNotification(t.storageFullPruning, 'warning');
  }, [addNotification, t]);

  const [cachedImages, setCachedImages] = useLocalStorage<CachedImages>(
    'tarot-card-images', 
    {},
    { onPrune: onPruneCallback }
  );

  const addHistory = (reading: Reading) => {
    setHistory([reading, ...history]);
  };
  
  const updateHistory = (updatedHistory: HistoryItem[]) => {
      setHistory(updatedHistory);
  }

  const incrementInterpretationUsage = (amount = 1) => {
    incrementQuota('interpretations', amount);
  };

  const incrementImageUsage = (amount = 1) => {
      incrementQuota('images', amount);
  };

  const currentSkin = SKINS.find(s => s.id === currentSkinId) || SKINS[0];

  const renderView = () => {
    switch (view) {
      case 'reading':
        return <ReadingScreen />;
      case 'wiki':
        return <WikiScreen />;
      case 'skins':
        return <SkinScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'home':
      default:
        return <HomeScreen />;
    }
  };
  
  const appContextValue: AppContextType = {
    language,
    setLanguage,
    view,
    setView,
    userInfo,
    setUserInfo,
    history,
    viewingReading,
    setViewingReading,
    addHistory,
    updateHistory,
    currentSkin,
    setCurrentSkinId,
    cachedImages,
    setCachedImages,
    quotaUsage,
    incrementInterpretationUsage,
    incrementImageUsage,
    notifications,
    addNotification,
    t,
    dailyFacts,
    areFactsLoading,
    isAssistantOpen,
    setIsAssistantOpen,
    assistantMessages,
    setAssistantMessages,
    resetAssistant,
    settings,
    setSettings,
    isMuted,
    setIsMuted,
    userImages,
    setUserImages,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <audio ref={audioRef} loop />
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          <header className="flex justify-between items-center mb-6">
            <h1 onClick={() => setView('home')} className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] cursor-pointer hover:text-[var(--color-primary-hover)] transition-colors">
              <i className="fa-solid fa-layer-group mr-2"></i>
              {t.appName}
            </h1>
            <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 px-3 py-1 bg-[var(--color-surface)] rounded-full">
                    <button
                        onClick={() => setLanguage('vi')}
                        className={`px-2 py-1 text-sm rounded-full transition-colors ${language === 'vi' ? 'bg-[var(--color-primary-strong)] text-white' : 'hover:bg-[var(--color-surface-light)]'}`}
                    >
                        VI
                    </button>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-2 py-1 text-sm rounded-full transition-colors ${language === 'en' ? 'bg-[var(--color-primary-strong)] text-white' : 'hover:bg-[var(--color-surface-light)]'}`}
                    >
                        EN
                    </button>
                </div>
                <button
                    onClick={handleMuteToggle}
                    className="text-xl w-10 h-10 bg-[var(--color-surface)] rounded-full flex items-center justify-center hover:bg-[var(--color-surface-light)] transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    <i className={`fas ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                </button>
                <button
                  onClick={() => setView('settings')}
                  className="text-xl w-10 h-10 bg-[var(--color-surface)] rounded-full flex items-center justify-center hover:bg-[var(--color-surface-light)] transition-colors"
                  aria-label={t.settings}
                >
                  <i className="fas fa-cog"></i>
                </button>
            </div>
          </header>
          <main>
            {renderView()}
          </main>
        </div>
        <ScrollToTopButton />
        <NotificationArea />
        <Assistant />
      </div>
    </AppContext.Provider>
  );
};

export default App;