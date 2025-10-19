
import { useState, useEffect, useCallback } from 'react';

interface UseLocalStorageCallbacks {
  onPrune?: () => void;
}

function useLocalStorage<T>(key: string, initialValue: T, callbacks?: UseLocalStorageCallbacks): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    setStoredValue(currentStoredValue => {
      const valueToStore = value instanceof Function ? value(currentStoredValue) : value;
      try {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // Handle QuotaExceededError specifically for the image cache
        if (error instanceof DOMException && (error.name === 'QuotaExceededError' || error.code === 22) && key === 'tarot-card-images') {
          console.warn('LocalStorage quota exceeded for images. Attempting to prune cache.');
          try {
            // Pruning strategy: remove the oldest skin's cache.
            const prunedValue: { [key: string]: any } = { ...(valueToStore as object) };
            const skinKeys = Object.keys(prunedValue);
            if (skinKeys.length > 0) {
              console.log(`Pruning cache for skin: ${skinKeys[0]}`);
              delete prunedValue[skinKeys[0]];
              
              // Retry setting the pruned value
              window.localStorage.setItem(key, JSON.stringify(prunedValue));
              
              // Notify the app that pruning has occurred
              callbacks?.onPrune?.();
              
              // Return the pruned value to update the state correctly
              return prunedValue as T;
            }
          } catch (pruningError) {
            console.error("Failed to save to localStorage even after pruning.", pruningError);
          }
        } else {
          // Log other errors or errors for other keys
          console.error(`Failed to set item '${key}' in localStorage`, error);
        }
      }
      return valueToStore;
    });
  }, [key, callbacks]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
        if (e.key === key) {
             try {
                setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
             } catch (error) {
                console.error(error);
                setStoredValue(initialValue);
             }
        }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
