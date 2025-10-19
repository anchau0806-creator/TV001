
import useLocalStorage from './useLocalStorage';
import type { QuotaUsage } from '../types';

const getTodayString = () => new Date().toISOString().split('T')[0];

const initialQuota: QuotaUsage = {
    date: getTodayString(),
    interpretations: 0,
    images: 0,
};

function useQuota(): [QuotaUsage, (type: 'interpretations' | 'images', amount?: number) => void] {
    const [usage, setUsage] = useLocalStorage<QuotaUsage>('tarot-quota-usage', initialQuota);

    // Reset usage if it's a new day
    if (usage.date !== getTodayString()) {
        setUsage(initialQuota);
    }

    const incrementUsage = (type: 'interpretations' | 'images', amount = 1) => {
        setUsage(currentUsage => {
            // Double-check for new day in case of race conditions or tab inactivity
            if (currentUsage.date !== getTodayString()) {
                return {
                    date: getTodayString(),
                    interpretations: type === 'interpretations' ? amount : 0,
                    images: type === 'images' ? amount : 0,
                };
            }
            return {
                ...currentUsage,
                [type]: currentUsage[type] + amount,
            };
        });
    };

    return [usage, incrementUsage];
}

export default useQuota;
