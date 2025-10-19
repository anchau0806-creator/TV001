import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useAppContext } from '../App';
import type { DrawnCard, Reading, UserInfo, Skin, Language } from '../types';
import { drawCards } from '../services/tarotService';
import { generateInterpretation, generateCardImage } from '../services/geminiService';
import { generateReadingImage } from '../services/imageService';
import CardImage from '../components/CardImage';
import useLocalStorage from '../hooks/useLocalStorage';
import { UI_TEXT } from '../constants';

type ReadingStep = 'topic' | 'spreadSelection' | 'processing' | 'picking' | 'result';

const GeneratingView: React.FC = () => {
    const { t, language } = useAppContext();
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

    const loadingMessages = useMemo(() => ({
        vi: [
            "Đang kết nối với cõi tâm linh...",
            "Phân tích năng lượng vũ trụ...",
            "Giải mã các biểu tượng thành lời khuyên...",
            "AI đang tham khảo các hồ sơ tiên tri...",
        ],
        en: [
            "Connecting with the ethereal plane...",
            "Analyzing the cosmic energies...",
            "Translating symbols into guidance...",
            "The AI is consulting the prophetic records...",
        ]
    }), [language]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingMessageIndex(prevIndex => (prevIndex + 1) % loadingMessages[language].length);
        }, 2500);
        return () => clearInterval(interval);
    }, [language, loadingMessages]);

    return (
        <div className="text-center p-6 sm:p-10 flex flex-col items-center justify-center space-y-8 min-h-[50vh] animate-fade-in">
            <div className="animate-spin text-5xl text-[var(--color-primary)]">
                <i className="fas fa-circle-notch"></i>
            </div>
            <div className="w-full max-w-md space-y-6">
                <div className="relative h-8 overflow-hidden">
                    {loadingMessages[language].map((msg, index) => (
                        <p key={msg} className={`text-xl text-[var(--color-text)] absolute w-full transition-all duration-700 ease-in-out ${index === loadingMessageIndex ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-full'}`}>
                            {msg}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface CardPickingViewProps {
    cardCount: number;
    onConfirm: () => void;
    totalCardsToDisplay: number;
}
const CardPickingView: React.FC<CardPickingViewProps> = ({ cardCount, onConfirm, totalCardsToDisplay }) => {
    const { t } = useAppContext();
    const [pickedIndices, setPickedIndices] = useState<number[]>([]);

    const { gridLayoutClass, maxWidthClass } = useMemo(() => {
        if (totalCardsToDisplay > 60) { // Full Deck (78)
            return { gridLayoutClass: 'grid-cols-6 sm:grid-cols-10 gap-2', maxWidthClass: 'max-w-4xl' };
        }
        if (totalCardsToDisplay > 30) { // Minor Deck (56)
            return { gridLayoutClass: 'grid-cols-5 sm:grid-cols-8 gap-3', maxWidthClass: 'max-w-3xl' };
        }
        // Major Deck (22)
        return { gridLayoutClass: 'grid-cols-3 sm:grid-cols-7 gap-4', maxWidthClass: 'max-w-2xl' };
    }, [totalCardsToDisplay]);

    const handleCardClick = (index: number) => {
        setPickedIndices(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index); // Deselect
            }
            if (prev.length < cardCount) {
                return [...prev, index]; // Select
            }
            return prev; // Do nothing if already full
        });
    };

    const handleReset = () => setPickedIndices([]);

    const isConfirmDisabled = pickedIndices.length !== cardCount;

    return (
        <div className="flex flex-col items-center space-y-8 animate-fade-in">
            <div className="text-center">
                <h2 className="text-xl font-bold mb-2 text-[var(--color-primary)]">
                    {t.pickNCards.replace('{count}', String(cardCount))}
                </h2>
                <p className="font-semibold text-[var(--color-text-muted)]">
                    {t.cardsSelected.replace('{count}', String(pickedIndices.length)).replace('{max}', String(cardCount))}
                </p>
            </div>

            <div className={`grid ${gridLayoutClass} w-full ${maxWidthClass}`}>
                {Array.from({ length: totalCardsToDisplay }).map((_, i) => {
                    const isPicked = pickedIndices.includes(i);
                    return (
                        <div
                            key={i}
                            role="button"
                            aria-pressed={isPicked}
                            tabIndex={0}
                            onClick={() => handleCardClick(i)}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick(i)}
                            className={`aspect-[2/3.5] bg-[var(--color-surface)] rounded-md shadow-md border-2 flex items-center justify-center cursor-pointer transition-all duration-300 transform ${isPicked ? 'border-[var(--color-primary-strong)] scale-105 -translate-y-2' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}
                        >
                            <i className={`fa-solid fa-wand-magic-sparkles text-xl transition-colors duration-300 ${isPicked ? 'text-[var(--color-primary-strong)]' : 'text-[var(--color-text-muted)]'}`}></i>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center space-x-4">
                <button 
                    onClick={handleReset} 
                    className="px-6 py-2 bg-[var(--color-surface-light)] rounded-lg hover:opacity-80 transition-opacity"
                >
                    {t.resetSelection}
                </button>
                <button 
                    onClick={onConfirm}
                    disabled={isConfirmDisabled}
                    className="px-8 py-3 bg-[var(--color-primary-strong-hover)] text-white font-bold rounded-lg hover:bg-[var(--color-primary-strong)] transition-all duration-300 disabled:bg-[var(--color-surface-light)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {t.confirmSelection}
                </button>
            </div>
        </div>
    );
};


interface TopicSelectionProps {
    t: (typeof UI_TEXT)['vi'];
    topic: string;
    setTopic: React.Dispatch<React.SetStateAction<string>>;
    customTopic: string;
    setCustomTopic: React.Dispatch<React.SetStateAction<string>>;
    handleBackToHome: () => void;
    onContinue: () => void;
    topicError: string;
}

const TopicSelection: React.FC<TopicSelectionProps> = React.memo(({
    t,
    topic,
    setTopic,
    customTopic,
    setCustomTopic,
    handleBackToHome,
    onContinue,
    topicError,
}) => (
    <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)] animate-fade-in">
        <h2 className="text-xl font-bold mb-6 text-center text-[var(--color-primary)]">{t.chooseTopic}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {(['love', 'work', 'money', 'destiny', 'yesNo'] as const).map(key => (
                 <button key={key} onClick={() => setTopic(currentTopic => currentTopic === key ? '' : key)} className={`p-4 rounded-lg transition-colors text-center ${topic === key ? 'bg-[var(--color-primary-strong)] ring-2 ring-[var(--color-primary)]' : 'bg-[var(--color-surface-light)] hover:bg-[var(--color-border)]'}`}>{t[key]}</button>
            ))}
        </div>
        <div className="space-y-2">
            <label className="text-[var(--color-text)]">{t.customTopic}</label>
            <input
                type="text"
                value={customTopic}
                onChange={(e) => {
                    setCustomTopic(e.target.value);
                    setTopic('custom');
                }}
                placeholder={t.customTopicPlaceholder}
                className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)]"
            />
        </div>
        <div className="mt-8 flex flex-col items-center">
            <div className="flex justify-between w-full">
                <button onClick={handleBackToHome} className="px-6 py-2 bg-[var(--color-surface-light)] rounded-lg hover:opacity-80">{t.back}</button>
                <button onClick={onContinue} className="px-6 py-2 bg-[var(--color-primary-strong-hover)] text-white rounded-lg hover:bg-[var(--color-primary-strong)]">{t.continue}</button>
            </div>
            <div className="h-6 mt-2">
                {topicError && <p className="text-[var(--color-danger)] text-sm animate-fade-in">{topicError}</p>}
            </div>
        </div>
    </div>
));

interface SpreadSelectionProps {
    t: (typeof UI_TEXT)['vi'];
    recommendedSpread: 1 | 3 | 5;
    onSelect: (count: 1 | 3 | 5) => void;
    onBack: () => void;
}

const SpreadSelection: React.FC<SpreadSelectionProps> = ({ t, recommendedSpread, onSelect, onBack }) => {
    const spreads = [
        { count: 1, title: t.spread1Card, desc: t.spread1CardDesc },
        { count: 3, title: t.spread3Card, desc: t.spread3CardDesc },
        { count: 5, title: t.spread5Card, desc: t.spread5CardDesc },
    ] as const;

    return (
        <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)] animate-fade-in text-center">
            <h2 className="text-xl font-bold mb-6 text-[var(--color-primary)]">{t.chooseSpread}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {spreads.map(spread => (
                    <button
                        key={spread.count}
                        onClick={() => onSelect(spread.count)}
                        className={`relative p-6 rounded-lg text-left transition-all duration-300 transform hover:scale-105 ${
                            spread.count === recommendedSpread
                                ? 'bg-[var(--color-primary-strong)]/80 border-2 border-[var(--color-primary)] shadow-lg'
                                : 'bg-[var(--color-surface-light)] hover:bg-[var(--color-border)] border-2 border-transparent'
                        }`}
                    >
                        {spread.count === recommendedSpread && (
                            <span className="absolute top-0 right-0 -mt-3 -mr-3 bg-[var(--color-primary)] text-black text-xs font-bold px-3 py-1 rounded-full">{t.recommended}</span>
                        )}
                        <h3 className="font-bold text-lg">{spread.title}</h3>
                        <p className="text-sm text-[var(--color-text)] opacity-90 mt-2">{spread.desc}</p>
                    </button>
                ))}
            </div>
             <div className="flex justify-center">
                <button onClick={onBack} className="px-6 py-2 bg-[var(--color-surface-light)] rounded-lg hover:opacity-80">{t.back}</button>
            </div>
        </div>
    );
};

interface ResultViewProps {
  reading: Reading;
  t: (typeof UI_TEXT)['vi'];
  isCached: boolean;
  generationError: string | null;
  currentSkin: Skin;
  language: Language;
  handleBackToHome: () => void;
  handleDownload: (reading: Reading) => void;
  isDownloading: boolean;
}

const getGridClasses = (count: number) => {
    if (count === 1) return 'sm:grid-cols-1 max-w-xs mx-auto';
    if (count === 3) return 'sm:grid-cols-3';
    if (count === 5) return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5';
    return 'sm:grid-cols-3'; // Default
};


const ResultView: React.FC<ResultViewProps> = React.memo(({
    reading,
    t,
    isCached,
    generationError,
    currentSkin,
    language,
    handleBackToHome,
    handleDownload,
    isDownloading,
}) => {
    return (
        <div className="space-y-6 animate-fade-in">
            {isCached && <div className="bg-yellow-900/50 border border-yellow-700 text-yellow-300 p-3 rounded-lg text-center text-sm">{t.resultFromToday}</div>}
             {generationError && (
              <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg text-center">
                <p className="font-bold text-lg"><i className="fas fa-exclamation-triangle mr-2"></i>{t.readingFailed}</p>
                <p className="text-sm mt-2 font-mono bg-black/30 p-2 rounded">{generationError}</p>
              </div>
            )}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-[var(--color-primary)]">{t.yourReadingFor} {reading.userInfo.name}</h2>
                <p><span className="font-semibold">{t.topic}:</span> {reading.topic}</p>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center">{t.cardsDrawn}</h3>
                <div className={`grid grid-cols-1 ${getGridClasses(reading.cards.length)} gap-6`}>
                    {reading.cards.map((c, i) => (
                        <div key={i} className="text-center">
                            <div className="mb-2">
                                <CardImage card={c.card} skin={currentSkin} language={language} isReversed={c.isReversed} />
                            </div>
                            <p className="font-bold">{c.card.name[language]}</p>
                            {c.isReversed && <p className="text-sm text-[var(--color-text-muted)]">({t.reversed})</p>}
                        </div>
                    ))}
                </div>
            </div>

            {reading.interpretation && (
              <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)]">
                  <h3 className="text-xl font-semibold mb-4">{t.interpretation}</h3>
                  <p className="whitespace-pre-wrap leading-relaxed text-[var(--color-text)]">{reading.interpretation}</p>
              </div>
            )}
            <div className="text-center mt-8 flex justify-center items-center gap-4">
                <button onClick={handleBackToHome} className="px-6 py-3 bg-[var(--color-surface-light)] text-white font-bold rounded-lg hover:opacity-80 transition-colors">{t.back}</button>
                <button 
                    onClick={() => handleDownload(reading)} 
                    disabled={isDownloading}
                    className="px-6 py-3 bg-[var(--color-accent-strong)] text-white font-bold rounded-lg hover:opacity-90 transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
                >
                    {isDownloading ? (
                        <><i className="fas fa-spinner fa-spin mr-2"></i>{t.loading}...</>
                    ) : (
                        <><i className="fas fa-download mr-2"></i>{t.downloadResult}</>
                    )}
                </button>
            </div>
        </div>
    );
});

const ReadingScreen: React.FC = () => {
  const { 
    t, 
    language, 
    userInfo, 
    currentSkin, 
    addHistory, 
    cachedImages, 
    setCachedImages,
    incrementInterpretationUsage,
    incrementImageUsage,
    viewingReading,
    setViewingReading,
    settings,
    addNotification,
  } = useAppContext();
  const [step, setStep] = useState<ReadingStep>('topic');
  const [topic, setTopic] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [interpretation, setInterpretation] = useState('');
  const [dailyCache, setDailyCache] = useLocalStorage<{[key: string]: Reading}>('tarot-daily-cache', {});
  const [cachedResult, setCachedResult] = useState<Reading | null>(null);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [cardCount, setCardCount] = useState(3);
  const [topicError, setTopicError] = useState('');
  const [recommendedSpread, setRecommendedSpread] = useState<1 | 3 | 5>(3);
  const [pendingReading, setPendingReading] = useState<Reading | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const totalCardsInDeck = useMemo(() => {
    switch (settings.readingDeck) {
        case 'major':
            return 22;
        case 'minor':
            return 56;
        case 'full':
        default:
            return 78;
    }
  }, [settings.readingDeck]);


  const handleBackToHome = () => {
    window.history.back();
  };

  const getTodayCacheKey = useCallback((cardCountForCache: number) => {
    const today = new Date().toISOString().split('T')[0];
    const userHash = `${userInfo.name}-${userInfo.dob}-${userInfo.gender}`;
    const topicHash = topic === 'custom' ? customTopic.trim() : topic;
    return `${today}__${userHash}__${topicHash}__${cardCountForCache}`;
  }, [userInfo, topic, customTopic]);

  const handleTopicSubmit = useCallback(() => {
    const finalTopic = topic === 'custom' ? customTopic.trim() : t[topic as keyof typeof t];
    if (!finalTopic) {
        setTopicError(t.pleaseSelectTopic);
        return;
    }
    setTopicError('');

    let recommendation: 1 | 3 | 5 = 3;
    if (topic === 'yesNo') {
        recommendation = 1;
    } else if (topic === 'custom' && customTopic.trim().length >= 20) {
        recommendation = 5;
    }
    setRecommendedSpread(recommendation);
    setStep('spreadSelection');
  }, [topic, customTopic, t]);

  const generateReading = useCallback(async (count: number) => {
      const fatedCards = drawCards(count, settings.readingDeck);
      const finalTopic = topic === 'custom' ? customTopic.trim() : t[topic as keyof typeof t];

      try {
        const interpretationPromise = generateInterpretation(fatedCards, finalTopic, userInfo, language, settings);
        
        const cardsToGenerate = currentSkin.id === 'default'
          ? []
          : fatedCards.filter(c => !cachedImages[currentSkin.id]?.[c.card.id]);

        const imagePromises = cardsToGenerate.map(c => generateCardImage(c.card.name.en, currentSkin));

        const [interpretationResult, ...imageResults] = await Promise.all([
          interpretationPromise,
          ...imagePromises
        ]);
        
        incrementInterpretationUsage(1);
        if (cardsToGenerate.length > 0) {
          incrementImageUsage(cardsToGenerate.length);
        }
        
        if (cardsToGenerate.length > 0) {
          const newImages: { [key: string]: string } = {};
          cardsToGenerate.forEach((drawnCard, index) => {
            newImages[drawnCard.card.id] = imageResults[index];
          });

          if (Object.keys(newImages).length > 0) {
            setCachedImages(prev => ({
              ...prev,
              [currentSkin.id]: {
                ...(prev[currentSkin.id] || {}),
                ...newImages
              }
            }));
          }
        }

        const newReading: Reading = {
          id: new Date().toISOString(),
          date: new Date().toISOString(),
          userInfo,
          topic: finalTopic,
          cards: fatedCards,
          interpretation: interpretationResult,
        };
        
        setDrawnCards(newReading.cards);
        setInterpretation(newReading.interpretation);
        setPendingReading(newReading); // Store the generated reading temporarily
        setStep('picking'); // Move to the interactive picking step
      } catch (err) {
        console.error("Error processing reading:", err);
        if (err instanceof Error) {
          setGenerationError(err.message);
        } else {
          setGenerationError("An unknown error occurred during generation.");
        }
        setStep('result'); // Show error on result screen
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userInfo, language, settings, topic, customTopic, t, currentSkin.id, cachedImages]
  );

  const handleSpreadSelect = useCallback((count: 1 | 3 | 5) => {
    const cacheKey = getTodayCacheKey(count);
    if (dailyCache[cacheKey]) {
      setCachedResult(dailyCache[cacheKey]);
      setDrawnCards(dailyCache[cacheKey].cards);
      setInterpretation(dailyCache[cacheKey].interpretation);
      setCardCount(count);
      setStep('result');
      return;
    }

    setCardCount(count);
    setStep('processing');
    generateReading(count);
  }, [getTodayCacheKey, dailyCache, generateReading]);

  const handlePickingConfirm = () => {
    if (pendingReading) {
      addHistory(pendingReading);
      const cacheKey = getTodayCacheKey(pendingReading.cards.length);
      setDailyCache(prev => ({ ...prev, [cacheKey]: pendingReading }));
      setPendingReading(null); // Clear pending reading
    }
    setStep('result');
  };
  
  const handleDownload = async (reading: Reading) => {
    setIsDownloading(true);
    addNotification(t.generatingDownload, 'info');
    try {
        const dataUrl = await generateReadingImage({
            reading,
            skin: currentSkin,
            language,
            t,
            cachedImages,
        });

        const link = document.createElement('a');
        const fileName = `tarot4u_reading_${new Date().toISOString().split('T')[0]}.png`;
        link.download = fileName;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        console.error("Failed to generate download image:", error);
        addNotification(error instanceof Error ? error.message : t.readingFailed, 'error');
    } finally {
        setIsDownloading(false);
    }
  };

  const currentReadingForDisplay: Reading | null = useMemo(() => {
    if (step !== 'result') return null;
    
    const finalTopic = topic === 'custom' ? customTopic.trim() : t[topic as keyof typeof t] || cachedResult?.topic || '';
    
    if (cachedResult) return cachedResult;

    return {
        id: 'new-reading-' + Date.now(),
        date: new Date().toISOString(),
        userInfo,
        topic: finalTopic,
        cards: drawnCards,
        interpretation: interpretation,
    }
  }, [step, cachedResult, topic, customTopic, t, userInfo, drawnCards, interpretation]);


  if (viewingReading) {
    return (
      <ResultView
        reading={viewingReading}
        t={t}
        isCached={false}
        generationError={null}
        currentSkin={currentSkin}
        language={language}
        handleBackToHome={handleBackToHome}
        handleDownload={handleDownload}
        isDownloading={isDownloading}
      />
    );
  }

  return (
    <div>
      {step === 'topic' && <TopicSelection 
        t={t}
        topic={topic}
        setTopic={setTopic}
        customTopic={customTopic}
        setCustomTopic={setCustomTopic}
        handleBackToHome={handleBackToHome}
        onContinue={handleTopicSubmit}
        topicError={topicError}
      />}
      {step === 'spreadSelection' && <SpreadSelection
        t={t}
        recommendedSpread={recommendedSpread}
        onSelect={handleSpreadSelect}
        onBack={() => setStep('topic')}
      />}
      {step === 'processing' && <GeneratingView />}
      {step === 'picking' && <CardPickingView 
        cardCount={cardCount} 
        onConfirm={handlePickingConfirm}
        totalCardsToDisplay={totalCardsInDeck}
      />}
      {step === 'result' && currentReadingForDisplay && <ResultView
        reading={currentReadingForDisplay}
        t={t}
        isCached={!!cachedResult}
        generationError={generationError}
        currentSkin={currentSkin}
        language={language}
        handleBackToHome={handleBackToHome}
        handleDownload={handleDownload}
        isDownloading={isDownloading}
      />}
    </div>
  );
};

export default ReadingScreen;