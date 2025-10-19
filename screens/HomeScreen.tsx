import React, { useState } from 'react';
import { useAppContext } from '../App';
import type { HistoryItem, Reading } from '../types';
import QuotaDisplay from '../components/QuotaDisplay';

const HomeScreen: React.FC = () => {
  const { t, language, userInfo, setUserInfo, setView, history, updateHistory, setViewingReading } = useAppContext();
  const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null);
  const [usefulness, setUsefulness] = useState(50);
  const [errors, setErrors] = useState({ name: '', dob: '', gender: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserInfo(prevUserInfo => ({ ...prevUserInfo, [name]: value }));
    // Clear error on input
    if (value.trim()) {
        setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleViewHistory = (item: Reading) => {
    setViewingReading(item);
    setView('reading');
  };
  
  const handleStartReading = () => {
    const newErrors = { name: '', dob: '', gender: '' };
    let isValid = true;

    if (!userInfo.name.trim()) {
        newErrors.name = t.pleaseEnterName;
        isValid = false;
    }
    if (!userInfo.dob) {
        newErrors.dob = t.pleaseEnterDob;
        isValid = false;
    } else if (new Date(userInfo.dob) > new Date()) {
        newErrors.dob = t.dobInvalid;
        isValid = false;
    }
    if (!userInfo.gender) {
        newErrors.gender = t.pleaseSelectGender;
        isValid = false;
    }
    
    setErrors(newErrors);

    if (isValid) {
      setView('reading');
    }
  };

  const handleDelete = (id: string) => {
    const newHistory = history.map(item =>
      item.id === id ? { id, usefulness } : item
    );
    updateHistory(newHistory);
    setShowDeleteModal(null);
  };

  const renderHistoryItem = (item: HistoryItem) => {
    if ('usefulness' in item) {
      return (
        <div key={item.id} className="bg-[var(--color-surface)] p-4 rounded-lg flex justify-between items-center opacity-60">
            <p className="text-[var(--color-text-muted)] italic">{t.deletedEntry}</p>
            <p className="text-sm font-semibold text-[var(--color-primary)]">{t.usefulness}: {item.usefulness}%</p>
        </div>
      );
    }

    return (
      <div 
        key={item.id} 
        onClick={() => handleViewHistory(item)} 
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleViewHistory(item)}
        role="button"
        tabIndex={0}
        className="bg-[var(--color-surface)] p-4 rounded-lg flex justify-between items-center hover:bg-[var(--color-surface-light)] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)]"
      >
        <div>
          <p className="font-semibold">{item.topic}</p>
          <p className="text-sm text-[var(--color-text-muted)]">{new Date(item.date).toLocaleString(language)} - {item.userInfo.name}</p>
        </div>
        <button 
          onClick={(e) => { 
            e.stopPropagation(); 
            setShowDeleteModal(item.id);
          }} 
          className="text-[var(--color-danger)] hover:opacity-80 text-lg p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-[var(--color-danger-strong)]"
          aria-label={`Delete reading for ${item.topic}`}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <QuotaDisplay />

      <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[var(--color-border)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
            <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-semibold text-[var(--color-text)]">{t.fullName}</label>
                <input type="text" id="name" name="name" value={userInfo.name} onChange={handleInputChange} placeholder={t.fullNamePlaceholder} className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)]" />
                <div className="h-5 mt-1">
                  {errors.name && <p className="text-[var(--color-danger)] text-xs animate-fade-in">{errors.name}</p>}
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="dob" className="mb-2 font-semibold text-[var(--color-text)]">{t.dob}</label>
                <input type="date" id="dob" name="dob" value={userInfo.dob} onChange={handleInputChange} className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)]" />
                <div className="h-5 mt-1">
                  {errors.dob && <p className="text-[var(--color-danger)] text-xs animate-fade-in">{errors.dob}</p>}
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="gender" className="mb-2 font-semibold text-[var(--color-text)]">{t.gender}</label>
                <select id="gender" name="gender" value={userInfo.gender} onChange={handleInputChange} className="w-full bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)]">
                    <option value="">--</option>
                    <option value="male">{t.male}</option>
                    <option value="female">{t.female}</option>
                    <option value="other">{t.other}</option>
                </select>
                <div className="h-5 mt-1">
                  {errors.gender && <p className="text-[var(--color-danger)] text-xs animate-fade-in">{errors.gender}</p>}
                </div>
            </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
            <button onClick={handleStartReading} className="w-full bg-[var(--color-primary-strong-hover)] text-white font-bold py-3 px-4 rounded-lg hover:bg-[var(--color-primary-strong)] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <i className="fas fa-book-open mr-2"></i><span>{t.readTarot}</span>
            </button>
            <button onClick={() => setView('wiki')} className="w-full bg-[var(--color-secondary-strong)] text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <i className="fas fa-atlas mr-2"></i><span>{t.tarotWiki}</span>
            </button>
            <button onClick={() => setView('skins')} className="w-full bg-[var(--color-accent-strong)] text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <i className="fas fa-palette mr-2"></i><span>{t.tarotSkins}</span>
            </button>
            <button onClick={() => setView('settings')} className="w-full bg-[var(--color-surface-light)] text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <i className="fas fa-cog mr-2"></i><span>{t.settings}</span>
            </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text)] border-b-2 border-[var(--color-border)] pb-2">{t.readingHistory}</h2>
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2 pb-24">
            {history.length > 0 ? history.map(renderHistoryItem) : <p className="text-[var(--color-text-muted)]">{t.noHistory}</p>}
        </div>
      </div>
      
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[var(--color-surface)] p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">{t.rateUsefulness}</h3>
            <div className="mb-4">
              <label htmlFor="usefulness" className="block text-sm font-medium text-[var(--color-text)] mb-2">{t.usefulness}: {usefulness}%</label>
              <input
                type="range"
                id="usefulness"
                min="0"
                max="100"
                value={usefulness}
                onChange={(e) => setUsefulness(Number(e.target.value))}
                className="w-full h-2 bg-[var(--color-surface-light)] rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowDeleteModal(null)} className="px-4 py-2 bg-[var(--color-surface-light)] rounded-lg hover:opacity-80">{t.back}</button>
              <button onClick={() => handleDelete(showDeleteModal)} className="px-4 py-2 bg-[var(--color-danger-strong)] text-white rounded-lg hover:opacity-90">{t.confirmDelete}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
