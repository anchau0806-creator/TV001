import React, { useState } from 'react';
import { useAppContext } from '../App';
import { MUSIC_TRACKS, UI_TEXT, BACKGROUNDS } from '../constants';
import type { ReadingStyle, AssistantStylePreset, MusicTheme, Theme, BackgroundTheme } from '../types';

const THEME_OPTIONS: { id: Theme; nameKey: keyof typeof UI_TEXT['vi']; colors: string[] }[] = [
    { id: 'mysterious', nameKey: 'mysterious', colors: ['#0f172a', '#334155', '#818cf8', '#c084fc'] },
    { id: 'warm', nameKey: 'warm', colors: ['#291d1d', '#573f3a', '#f59e0b', '#f97316'] },
    { id: 'vibrant', nameKey: 'vibrant', colors: ['#111827', '#374151', '#22d3ee', '#d946ef'] },
    { id: 'gentle', nameKey: 'gentle', colors: ['#2d3748', '#64748b', '#fbb6ce', '#a7f3d0'] },
    { id: 'dynamic', nameKey: 'dynamic', colors: ['#000000', '#27272a', '#facc15', '#3b82f6'] },
];

const SettingsScreen: React.FC = () => {
    const { 
        t, 
        language, 
        settings, 
        setSettings,
        resetAssistant,
        setIsMuted,
    } = useAppContext();

    const [customStyleText, setCustomStyleText] = useState(
        typeof settings.assistantStyle === 'object' ? settings.assistantStyle.custom : ''
    );
    
    const handleStylePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === 'custom') {
            setSettings(prev => ({...prev, assistantStyle: { custom: customStyleText }}));
        } else {
            setSettings(prev => ({...prev, assistantStyle: value as AssistantStylePreset }));
        }
        resetAssistant();
    };
    
    const handleCustomStyleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setCustomStyleText(text);
        setSettings(prev => ({...prev, assistantStyle: { custom: text }}));
    };

    const handleCustomStyleConfirm = () => {
        if (customStyleText.trim()) {
            resetAssistant();
        }
    };
    
    const handleReadingStyleChange = (style: ReadingStyle) => {
        setSettings(prev => {
            const newStyles = [...prev.readingStyle];
            if (newStyles.includes(style)) {
                return {...prev, readingStyle: newStyles.filter(s => s !== style)};
            } else {
                if (newStyles.length < 2) {
                    newStyles.push(style);
                }
                return {...prev, readingStyle: newStyles};
            }
        });
    };
    
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setSettings(prev => ({ ...prev, musicVolume: newVolume }));
        setIsMuted(newVolume === 0);
    };

    const isCustomStyle = typeof settings.assistantStyle === 'object';
    
    const readingStyleOptions: ReadingStyle[] = ['accurate', 'balanced', 'positive', 'concise', 'detailed'];

    return (
        <div className="animate-fade-in space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-[var(--color-text)]">{t.settings}</h2>
                <button onClick={() => window.history.back()} className="px-6 py-2 bg-[var(--color-surface-light)] rounded-lg hover:opacity-80">{t.back}</button>
            </div>

             {/* Appearance Settings */}
            <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)] space-y-6">
                <h3 className="text-xl font-bold text-[var(--color-accent)]">{t.appearanceSettings}</h3>
                <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-3">Theme</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {THEME_OPTIONS.map(theme => (
                            <div
                                key={theme.id}
                                onClick={() => setSettings(prev => ({ ...prev, theme: theme.id }))}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSettings(prev => ({ ...prev, theme: theme.id }))}
                                aria-pressed={settings.theme === theme.id}
                                className={`p-4 rounded-lg cursor-pointer border-2 transition-all duration-200 focus:outline-none ${settings.theme === theme.id ? 'border-[var(--color-primary)] scale-105 bg-[var(--color-surface-light)]' : 'border-transparent hover:border-[var(--color-border)] bg-[var(--color-surface)]'}`}
                            >
                                <div className="flex justify-center space-x-1 mb-3 h-5">
                                    {theme.colors.map(color => (
                                        <div key={color} className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: color }} />
                                    ))}
                                </div>
                                <p className="text-center font-semibold text-sm">{t[theme.nameKey]}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                    <h4 className="font-semibold text-[var(--color-text)] mb-3">{t.background}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {BACKGROUNDS.map(bg => (
                            <div
                                key={bg.id}
                                onClick={() => setSettings(prev => ({ ...prev, background: bg.id as BackgroundTheme }))}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSettings(prev => ({ ...prev, background: bg.id as BackgroundTheme }))}
                                aria-pressed={settings.background === bg.id}
                                className={`p-2 rounded-lg cursor-pointer border-2 transition-all duration-200 focus:outline-none ${settings.background === bg.id ? 'border-[var(--color-primary)] scale-105 bg-[var(--color-surface-light)]' : 'border-transparent hover:border-[var(--color-border)] bg-[var(--color-surface)]'}`}
                            >
                                {bg.id === 'none' ? (
                                    <div className="w-full h-16 bg-[var(--color-surface)] rounded flex items-center justify-center">
                                        <i className="fas fa-ban text-2xl text-[var(--color-text-muted)]"></i>
                                    </div>
                                ) : (
                                    <img src={bg.url} alt={bg.name[language]} className="w-full h-16 object-cover rounded" />
                                )}
                                <p className="text-center font-semibold text-xs mt-2 truncate">{bg.name[language]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

             {/* Sound Settings */}
             <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)] space-y-6">
                <h3 className="text-xl font-bold text-[var(--color-accent-strong)]">{t.soundSettings}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="music-theme" className="block mb-2 font-semibold text-[var(--color-text)]">{t.backgroundMusic}</label>
                        <select 
                            id="music-theme"
                            value={settings.musicTheme}
                            onChange={(e) => setSettings(prev => ({ ...prev, musicTheme: e.target.value as MusicTheme }))}
                            className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-strong)]"
                        >
                            <option value="none">{t.none}</option>
                            {MUSIC_TRACKS.map(track => (
                                <option key={track.id} value={track.id}>{track.name[language]}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="music-volume" className="block mb-2 font-semibold text-[var(--color-text)]">{t.volume}: {Math.round(settings.musicVolume * 100)}%</label>
                         <input
                            type="range"
                            id="music-volume"
                            min="0"
                            max="1"
                            step="0.01"
                            value={settings.musicVolume}
                            onChange={handleVolumeChange}
                            className="w-full h-2 bg-[var(--color-surface-light)] rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Assistant Settings */}
            <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)] space-y-6">
                <h3 className="text-xl font-bold text-[var(--color-primary)]">{t.assistantSettings}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="assistant-model" className="block mb-2 font-semibold text-[var(--color-text)]">{t.aiModel}</label>
                        <select id="assistant-model" value={settings.assistantModel} disabled className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)] disabled:opacity-50">
                            <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="assistant-style" className="block mb-2 font-semibold text-[var(--color-text)]">{t.conversationStyle}</label>
                        {/* FIX: Replaced `isCustomStyle` with `typeof settings.assistantStyle === 'object'` to allow TypeScript to correctly narrow the type of `settings.assistantStyle` in the ternary expression and resolve the assignment error for the `value` prop. */}
                        <select id="assistant-style" value={typeof settings.assistantStyle === 'object' ? 'custom' : settings.assistantStyle} onChange={handleStylePresetChange} className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)]">
                            <option value="default">{t.defaultStyle}</option>
                            <option value="anh">{t.anhStyle}</option>
                            <option value="chi">{t.chiStyle}</option>
                            <option value="em">{t.emStyle}</option>
                            <option value="ban">{t.banStyle}</option>
                            <option value="custom">{t.customStyle}</option>
                        </select>
                    </div>
                </div>
                {isCustomStyle && (
                    <form 
                        className="animate-fade-in"
                        onSubmit={(e) => { e.preventDefault(); handleCustomStyleConfirm(); }}
                    >
                        <label htmlFor="custom-style-input" className="block mb-2 font-semibold text-[var(--color-text)]">{t.customStyle}</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                id="custom-style-input"
                                value={customStyleText}
                                onChange={handleCustomStyleChange}
                                onBlur={handleCustomStyleConfirm}
                                placeholder={t.customStylePlaceholder}
                                className="flex-1 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)]"
                            />
                            <button 
                                type="submit"
                                className="px-5 py-2 bg-[var(--color-primary-strong-hover)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-strong)] transition-colors flex-shrink-0"
                            >
                                {t.ok}
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {/* Reading Settings */}
            <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)] space-y-6">
                <h3 className="text-xl font-bold text-[var(--color-secondary)]">{t.readingSettings}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="reading-model" className="block mb-2 font-semibold text-[var(--color-text)]">{t.aiModel}</label>
                        <select id="reading-model" value={settings.readingModel} disabled className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)] disabled:opacity-50">
                            <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="reading-deck" className="block mb-2 font-semibold text-[var(--color-text)]">{t.deckUsed}</label>
                        <select id="reading-deck" value={settings.readingDeck} onChange={(e) => setSettings(prev => ({...prev, readingDeck: e.target.value as any}))} className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)]">
                            <option value="full">{t.fullDeck}</option>
                            <option value="major">{t.majorArcanaOnly}</option>
                            <option value="minor">{t.minorArcanaOnly}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block mb-2 font-semibold text-[var(--color-text)]">{t.interpretationStyle}</label>
                    <p className="text-sm text-[var(--color-text-muted)] mb-3">{t.interpretationStyleHint}</p>
                    <div className="flex flex-wrap gap-3">
                        {readingStyleOptions.map(style => (
                            <button
                                key={style}
                                onClick={() => handleReadingStyleChange(style)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${settings.readingStyle.includes(style) ? 'bg-[var(--color-secondary-strong)] text-white' : 'bg-[var(--color-surface-light)] hover:opacity-80'}`}
                            >
                                {t[style]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsScreen;
