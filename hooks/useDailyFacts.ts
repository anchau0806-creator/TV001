import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { generateNewTarotFacts } from '../services/geminiService';
import type { FactEntry, Language } from '../types';

const useDailyFacts = (language: Language) => {
  const [factsCache, setFactsCache] = useLocalStorage<FactEntry[]>('tarot-facts-cache', []);
  const [dailyFacts, setDailyFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrGenerateFacts = async () => {
      const today = new Date().toISOString().split('T')[0];
      
      const todaysFactsEntry = factsCache.find(e => e.date === today && e.lang === language);

      if (todaysFactsEntry) {
        setDailyFacts(todaysFactsEntry.facts);
        return;
      }

      setIsLoading(true);
      try {
        const sixDaysAgo = new Date();
        sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);

        const recentFacts = factsCache
          .filter(e => new Date(e.date) > sixDaysAgo)
          .flatMap(e => e.facts);

        const newFacts = await generateNewTarotFacts(recentFacts, language);
        
        const newEntry: FactEntry = { date: today, lang: language, facts: newFacts };
        
        const prunedCache = factsCache.filter(e => new Date(e.date) > sixDaysAgo);
        
        setFactsCache([...prunedCache, newEntry]);
        setDailyFacts(newFacts);
        
      } catch (error) {
        console.error("Failed to generate daily facts:", error);
        // In case of error, we'll just have an empty array, which UI can handle.
        setDailyFacts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrGenerateFacts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]); // Rerun only when language changes

  return { dailyFacts, isLoading };
};

export default useDailyFacts;