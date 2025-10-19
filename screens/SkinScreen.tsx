import React, { useState, useCallback, useMemo } from 'react';
import { useAppContext } from '../App';
import { SKINS, TAROT_DECK } from '../constants';
import type { UserImage, TarotCard } from '../types';
import CardImage from '../components/CardImage';

const ImageUploader: React.FC = () => {
    const { t, setUserImages, addNotification } = useAppContext();
    const [isDragging, setIsDragging] = useState(false);

    const processFile = useCallback((file: File) => {
        if (!file.type.startsWith('image/')) {
            addNotification(t.imageUploadError, 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const MAX_WIDTH = 600;
                const canvas = document.createElement('canvas');
                const scale = img.width > MAX_WIDTH ? MAX_WIDTH / img.width : 1;
                canvas.width = img.width * scale;
                canvas.height = img.height * scale;
                const ctx = canvas.getContext('2d');
                if (!ctx) return;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

                const newUserImage: UserImage = {
                    id: `${Date.now()}-${Math.random()}`,
                    name: file.name,
                    dataUrl: dataUrl,
                };
                setUserImages(prev => [newUserImage, ...prev]);
                addNotification(t.imageUploadSuccess, 'success');
            };
            img.onerror = () => addNotification(t.imageUploadError, 'error');
            img.src = e.target?.result as string;
        };
        reader.onerror = () => addNotification(t.imageUploadError, 'error');
        reader.readAsDataURL(file);
    }, [setUserImages, addNotification, t]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            processFile(e.target.files[0]);
        }
    };

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processFile(e.dataTransfer.files[0]);
        }
    }, [processFile]);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    return (
        <div className="mb-6">
            <label
                htmlFor="image-upload"
                className={`relative block w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragging ? 'border-[var(--color-primary-strong)] bg-[var(--color-surface-light)]' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
            >
                <input id="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileSelect} />
                <div className="flex flex-col items-center">
                    <i className="fas fa-cloud-upload-alt text-4xl text-[var(--color-primary)] mb-3"></i>
                    <p className="font-semibold">{t.uploadImage}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{t.dropImageHere}</p>
                </div>
            </label>
        </div>
    );
};

const CustomSkinManager: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const { t, language, userImages, setUserImages, settings, setSettings } = useAppContext();
    const [assigningCardId, setAssigningCardId] = useState<string | null>(null);

    const customSkin = SKINS.find(s => s.id === 'custom')!;

    const handleDeleteImage = (imageId: string) => {
        const imageInUse = Object.values(settings.customSkinMap).includes(imageId);
        const message = imageInUse ? `${t.confirmDeleteImage} ${t.imageInUse}` : t.confirmDeleteImage;
        
        if (window.confirm(message)) {
            setUserImages(prev => prev.filter(img => img.id !== imageId));
            setSettings(prev => {
                const newMap = { ...prev.customSkinMap };
                Object.keys(newMap).forEach(cardId => {
                    if (newMap[cardId] === imageId) {
                        delete newMap[cardId];
                    }
                });
                return { ...prev, customSkinMap: newMap };
            });
        }
    };
    
    const handleAssignImage = (imageId: string) => {
        if (assigningCardId) {
            setSettings(prev => ({
                ...prev,
                customSkinMap: { ...prev.customSkinMap, [assigningCardId]: imageId }
            }));
            setAssigningCardId(null);
        }
    };

    return (
        <div className="animate-fade-in space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-[var(--color-accent)]">{t.manageMySkin}</h2>
                <button onClick={onBack} className="px-6 py-2 bg-[var(--color-surface-light)] rounded-lg hover:opacity-80">{t.backToSkins}</button>
            </div>
            
            <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)]">
                <ImageUploader />
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">{t.myImageLibrary}</h3>
                {userImages.length > 0 ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-h-60 overflow-y-auto pr-2">
                        {userImages.map(image => (
                            <div key={image.id} className="relative group">
                                <img src={image.dataUrl} alt={image.name} className="w-full aspect-square object-cover rounded-lg"/>
                                <button onClick={() => handleDeleteImage(image.id)} className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600">
                                    <i className="fas fa-times text-xs"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-[var(--color-text-muted)] text-center py-4">{t.noCustomImages}</p>
                )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
                {TAROT_DECK.map(card => (
                    <div key={card.id} className="text-center">
                        <CardImage card={card} skin={customSkin} language={language} />
                        <p className="text-sm font-semibold mt-2 truncate">{card.name[language]}</p>
                        <button onClick={() => setAssigningCardId(card.id)} className="mt-1 text-xs bg-[var(--color-surface-light)] hover:bg-[var(--color-primary-strong)] text-white font-semibold py-1 px-3 rounded-full transition-colors">
                            {t.changeImage}
                        </button>
                    </div>
                ))}
            </div>

            {assigningCardId && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setAssigningCardId(null)}>
                    <div className="bg-[var(--color-surface)] rounded-2xl shadow-xl w-full max-w-2xl animate-zoom-in p-6 max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex-shrink-0">{t.selectAnImage}</h3>
                        <div className="flex-grow overflow-y-auto pr-2">
                            {userImages.length > 0 ? (
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                    {userImages.map(image => (
                                        <div key={image.id} onClick={() => handleAssignImage(image.id)} className="cursor-pointer group">
                                            <img src={image.dataUrl} alt={image.name} className="w-full aspect-square object-cover rounded-lg transition-transform group-hover:scale-105" />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-[var(--color-text-muted)] text-center py-8">{t.noCustomImages}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const SkinScreen: React.FC = () => {
    const { 
        t, 
        language,
        currentSkin,
        setCurrentSkinId,
    } = useAppContext();

    const [isManaging, setIsManaging] = useState(false);

    if (isManaging) {
        return <CustomSkinManager onBack={() => setIsManaging(false)} />;
    }

    return (
        <div className="animate-fade-in space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-[var(--color-accent)]">{t.tarotSkins}</h2>
                <button onClick={() => window.history.back()} className="px-6 py-2 bg-[var(--color-surface-light)] rounded-lg hover:opacity-80">{t.back}</button>
            </div>

            <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)]">
                <p className="mb-6 text-center text-[var(--color-text)]">{t.selectSkin}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKINS.map(skin => (
                        <div 
                            key={skin.id}
                            onClick={() => setCurrentSkinId(skin.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setCurrentSkinId(skin.id)}
                            className={`bg-[var(--color-surface)] p-4 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 border-4 focus:outline-none ${currentSkin.id === skin.id ? 'border-[var(--color-accent-strong)] scale-105' : 'border-transparent hover:border-[var(--color-border)] focus:border-[var(--color-border)]'}`}
                        >
                            <img 
                                src={skin.previewImage} 
                                alt={skin.name[language]}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-center text-[var(--color-accent)]">{skin.name[language]}</h3>
                                <p className="text-sm text-[var(--color-text-muted)] mt-2">{skin.description[language]}</p>
                                {skin.id === 'custom' && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsManaging(true);
                                        }}
                                        className="mt-4 bg-[var(--color-accent-strong)] text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
                                    >
                                        {t.manageMySkin}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkinScreen;