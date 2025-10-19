import React, { useState, useEffect, useMemo } from 'react';
import { useAppContext } from '../App';
import { TAROT_DECK, UI_TEXT, SKINS } from '../constants';
import CardImage from '../components/CardImage';
import type { SkinTheme } from '../types';

const WikiScreen: React.FC = () => {
  const { t, language } = useAppContext();
  const [selectedCard, setSelectedCard] = useState<(typeof TAROT_DECK)[0] | null>(null);
  const [wikiView, setWikiView] = useState<'cards' | 'story' | 'about'>('cards');
  
  const AboutTarotView = () => {
    const { dailyFacts, areFactsLoading } = useAppContext();
    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    useEffect(() => {
        if (dailyFacts.length > 0) {
            setCurrentFactIndex(Math.floor(Math.random() * dailyFacts.length));
        }
    }, [dailyFacts]);
    
    const showAnotherFact = () => {
        if (dailyFacts.length <= 1) return;
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * dailyFacts.length);
        } while (newIndex === currentFactIndex);
        setCurrentFactIndex(newIndex);
    };

    const renderFactBox = () => {
        if (areFactsLoading) {
            return <p className="italic">{t.loadingFacts}</p>;
        }
        if (dailyFacts.length > 0) {
            return (
                <div>
                    <p className="italic">"{dailyFacts[currentFactIndex]}"</p>
                    <button onClick={showAnotherFact} className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors text-sm mt-3 font-semibold">
                       <i className="fas fa-sync-alt mr-2"></i>{t.anotherFact}
                    </button>
                </div>
            );
        }
        return null;
    };


    return (
        <div className="space-y-8 text-[var(--color-text)] leading-relaxed animate-fade-in">
        <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-4 rounded-xl border border-[var(--color-primary)]/50 shadow-lg">
          <h3 className="font-bold text-[var(--color-primary)] mb-2"><i className="fas fa-lightbulb mr-2"></i>{t.randomFact}</h3>
          {renderFactBox()}
        </div>
        <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-xl border border-[var(--color-border)]">
            <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">{t.historyOfTarot}</h3>
            <p className="whitespace-pre-wrap">{t.historyOfTarotContent}</p>
        </div>
        <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-xl border border-[var(--color-border)]">
            <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">{t.aboutTheCards}</h3>
            <p className="whitespace-pre-wrap">{t.aboutTheCardsContent}</p>
        </div>
        <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-xl border border-[var(--color-border)]">
            <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">{t.typesOfSpreads}</h3>
            <p className="whitespace-pre-wrap">{t.typesOfSpreadsContent}</p>
        </div>
        </div>
    );
  };

  const TarotsStoryView = () => {
      return (
          <div className="space-y-8 text-[var(--color-text)] leading-relaxed animate-fade-in">
              <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-xl border border-[var(--color-border)]">
                  <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">{t.tarotsStory}</h3>
                  <p className="whitespace-pre-wrap">{t.tarotsStoryContent}</p>
              </div>
          </div>
      );
  };

  const CardLibraryView = () => {
    const [sortOrder, setSortOrder] = useState<'default' | 'nameAsc' | 'nameDesc' | 'suit'>('default');
    const [librarySkin, setLibrarySkin] = useState<SkinTheme>('default');
    const [modalSkinId, setModalSkinId] = useState<SkinTheme>('default');

    const handleCardClick = (card: (typeof TAROT_DECK)[0]) => {
      setSelectedCard(card);
      setModalSkinId('default'); // Reset skin view to default every time a new card is opened
    };

    const getSuitOrderVal = (cardId: string) => {
        if (!isNaN(Number(cardId))) return 0; // Major Arcana
        switch (cardId.charAt(0)) {
          case 'W': return 1; // Wands
          case 'C': return 2; // Cups
          case 'S': return 3; // Swords
          case 'P': return 4; // Pentacles
          default: return 5;
        }
    };
  
    const sortedDeck = useMemo(() => {
        const deck = [...TAROT_DECK];
        switch (sortOrder) {
          case 'nameAsc':
            return deck.sort((a, b) => a.name[language].localeCompare(b.name[language]));
          case 'nameDesc':
            return deck.sort((a, b) => b.name[language].localeCompare(a.name[language]));
          case 'suit':
            return deck.sort((a, b) => {
              const suitA = getSuitOrderVal(a.id);
              const suitB = getSuitOrderVal(b.id);
              if (suitA !== suitB) {
                return suitA - suitB;
              }
              const numA = Number(a.id.match(/\d+/)?.[0] ?? 0);
              const numB = Number(b.id.match(/\d+/)?.[0] ?? 0);
              return numA - numB;
            });
          case 'default':
          default:
            return deck;
        }
    }, [sortOrder, language]);

    const groupedDeck = useMemo(() => {
        const groups: { [key: string]: (typeof TAROT_DECK) } = {
            major: [], wands: [], cups: [], swords: [], pentacles: []
        };
        TAROT_DECK.forEach(card => {
            if (card.arcana === 'Major') groups.major.push(card);
            else if (card.suit === 'Wands') groups.wands.push(card);
            else if (card.suit === 'Cups') groups.cups.push(card);
            else if (card.suit === 'Swords') groups.swords.push(card);
            else if (card.suit === 'Pentacles') groups.pentacles.push(card);
        });
        const sortByNumber = (a: (typeof TAROT_DECK)[0], b: (typeof TAROT_DECK)[0]) => {
            const numA = Number(a.id.match(/\d+/)?.[0] ?? 0);
            const numB = Number(b.id.match(/\d+/)?.[0] ?? 0);
            return numA - numB;
        };
        groups.major.sort((a,b) => Number(a.id) - Number(b.id));
        groups.wands.sort(sortByNumber);
        groups.cups.sort(sortByNumber);
        groups.swords.sort(sortByNumber);
        groups.pentacles.sort(sortByNumber);
        return groups;
    }, []);

    const renderCard = (card: (typeof TAROT_DECK)[0]) => {
        const skinToRender = SKINS.find(s => s.id === librarySkin)!;
        return (
            <div key={card.id} className="text-center cursor-pointer group flex flex-col h-full" onClick={() => handleCardClick(card)}>
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                    <CardImage card={card} skin={skinToRender} language={language} />
                </div>
                <div className="mt-2 flex-grow">
                    <p className="text-sm font-semibold leading-tight">
                        {card.name[language]}
                        <span className="block text-xs text-[var(--color-text)] opacity-75 font-normal">
                            {card.name[language === 'vi' ? 'en' : 'vi']}
                        </span>
                    </p>
                </div>
            </div>
        );
    };

    const suitOrder: {key: keyof typeof groupedDeck, name: keyof (typeof UI_TEXT)['vi']}[] = [
        { key: 'major', name: 'majorArcana'},
        { key: 'wands', name: 'wands'},
        { key: 'cups', name: 'cups'},
        { key: 'swords', name: 'swords'},
        { key: 'pentacles', name: 'pentacles'},
    ];
    
    return (
        <div className="animate-fade-in">
            <div className="mb-6 flex flex-wrap justify-end items-center gap-4">
                 <div>
                    <label htmlFor="library-skin" className="mr-2 text-[var(--color-text)]">{t.chooseSkin}:</label>
                    <select
                        id="library-skin"
                        value={librarySkin}
                        onChange={(e) => setLibrarySkin(e.target.value as SkinTheme)}
                        className="bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)] text-[var(--color-text)]"
                    >
                        {SKINS.map(skin => (
                            <option key={skin.id} value={skin.id}>{skin.name[language]}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="sort-order" className="mr-2 text-[var(--color-text)]">{t.sortBy}:</label>
                    <select
                        id="sort-order"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as typeof sortOrder)}
                        className="bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)] text-[var(--color-text)]"
                    >
                        <option value="default">{t.sortDefault}</option>
                        <option value="nameAsc">{t.sortNameAsc}</option>
                        <option value="nameDesc">{t.sortNameDesc}</option>
                        <option value="suit">{t.sortSuit}</option>
                    </select>
                </div>
            </div>

            <p className="text-sm text-[var(--color-text)] opacity-90 italic text-center mb-6">
                <i className="fas fa-info-circle mr-2"></i>{t.cardLibraryNote}
            </p>

            {(sortOrder === 'default' || sortOrder === 'suit') ? (
                <div>
                    {suitOrder.map(suit => (
                        <div key={suit.key}>
                            <h3 className="text-2xl font-bold text-[var(--color-secondary)] mt-8 mb-4 border-b-2 border-[var(--color-border)] pb-2">
                                {t[suit.name]} / {UI_TEXT[language === 'vi' ? 'en' : 'vi'][suit.name]}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {groupedDeck[suit.key].map(renderCard)}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {sortedDeck.map(renderCard)}
                </div>
            )}


            {selectedCard && (
                <div 
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedCard(null)}
                >
                <div 
                    className="bg-[var(--color-surface)] rounded-2xl shadow-xl w-full max-w-2xl relative animate-zoom-in flex flex-col max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => setSelectedCard(null)} className="absolute top-3 right-3 text-2xl text-[var(--color-text-muted)] hover:text-white z-10">&times;</button>
                    
                    <div className="flex flex-col md:flex-row gap-6 p-6 overflow-y-auto">
                        <div className="w-full md:w-5/12 flex-shrink-0">
                            <div className="aspect-[2/3.5] w-full bg-[var(--color-surface-light)] rounded-lg shadow-lg flex items-center justify-center border-2 border-[var(--color-border)] overflow-hidden">
                                <CardImage card={selectedCard} skin={SKINS.find(s => s.id === modalSkinId)!} language={language} />
                            </div>
                            <div className="mt-3">
                                <label className="text-xs text-[var(--color-text-muted)] mb-2 block">{t.viewInStyle}:</label>
                                <div className="flex flex-wrap gap-1.5">
                                    {SKINS.map(skin => (
                                        <button 
                                            key={skin.id}
                                            onClick={() => setModalSkinId(skin.id)}
                                            className={`px-2 py-1 text-xs rounded transition-colors ${modalSkinId === skin.id ? 'bg-[var(--color-primary-strong)] text-white font-semibold' : 'bg-[var(--color-surface-light)] hover:opacity-80'}`}
                                        >
                                            {skin.name[language]}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-7/12">
                            <h3 className="text-2xl font-bold text-[var(--color-primary)] leading-tight">
                                {selectedCard.name[language]}
                                <span className="block text-lg text-[var(--color-text)] font-normal mt-1">
                                    {selectedCard.name[language === 'vi' ? 'en' : 'vi']}
                                </span>
                            </h3>
                            <div className="mt-4 space-y-4 text-sm">
                                <div>
                                    <h4 className="font-bold text-[var(--color-text)] text-base">▲ {t.uprightMeaning}</h4>
                                    <p className="text-[var(--color-text)] opacity-90 leading-relaxed">{selectedCard.meaningUpright[language]}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--color-text)] text-base">▼ {t.reversedMeaning}</h4>
                                    <p className="text-[var(--color-text)] opacity-90 leading-relaxed">{selectedCard.meaningReversed[language]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
  };

  const renderContent = () => {
    switch(wikiView) {
        case 'cards':
            return <CardLibraryView />;
        case 'story':
            return <TarotsStoryView />;
        case 'about':
            return <AboutTarotView />;
        default:
            return <CardLibraryView />;
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[var(--color-secondary)]">{t.tarotWiki}</h2>
        <button onClick={() => window.history.back()} className="px-6 py-2 bg-[var(--color-surface-light)] rounded-lg hover:opacity-80">{t.back}</button>
      </div>

       <div className="mb-6 flex space-x-2 border-b-2 border-[var(--color-border)]">
          <button onClick={() => setWikiView('cards')} className={`px-4 py-2 font-semibold rounded-t-lg transition-colors ${wikiView === 'cards' ? 'bg-[var(--color-surface-light)] text-[var(--color-secondary)]' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]'}`}>
              <i className="fas fa-layer-group mr-2"></i>{t.cardLibrary}
          </button>
           <button onClick={() => setWikiView('story')} className={`px-4 py-2 font-semibold rounded-t-lg transition-colors ${wikiView === 'story' ? 'bg-[var(--color-surface-light)] text-[var(--color-secondary)]' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]'}`}>
              <i className="fas fa-scroll mr-2"></i>{t.tarotsStory}
          </button>
          <button onClick={() => setWikiView('about')} className={`px-4 py-2 font-semibold rounded-t-lg transition-colors ${wikiView === 'about' ? 'bg-[var(--color-surface-light)] text-[var(--color-secondary)]' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]'}`}>
              <i className="fas fa-info-circle mr-2"></i>{t.aboutTarot}
          </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default WikiScreen;