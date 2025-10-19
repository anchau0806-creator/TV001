import React from 'react';
import { useAppContext } from '../App';
import { DAILY_QUOTA_LIMITS } from '../constants';

const QuotaBar: React.FC<{ used: number, limit: number, label: string }> = ({ used, limit, label }) => {
    const percentage = limit > 0 ? (used / limit) * 100 : 0;
    const isOver = used > limit;

    return (
        <div className="w-full">
            <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-[var(--color-text)]">{label}</span>
                <span className={`font-mono ${isOver ? 'text-[var(--color-danger)] font-bold' : 'text-[var(--color-text-muted)]'}`}>
                    {used} / {limit}
                </span>
            </div>
            <div className="w-full bg-[var(--color-surface-light)] rounded-full h-1.5">
                <div 
                    className={`h-1.5 rounded-full transition-all duration-500 ${isOver ? 'bg-[var(--color-danger-strong)]' : 'bg-[var(--color-primary-strong)]'}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
            </div>
        </div>
    );
};


const QuotaDisplay: React.FC = () => {
    const { t, quotaUsage } = useAppContext();

    return (
        <div className="bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[var(--color-border)] space-y-3 animate-fade-in">
            <h3 className="text-center font-bold text-[var(--color-text-muted)] text-sm uppercase tracking-wider">{t.quota}</h3>
            <div className="flex flex-col sm:flex-row gap-4">
                <QuotaBar 
                    used={quotaUsage.interpretations}
                    limit={DAILY_QUOTA_LIMITS.interpretations}
                    label={t.interpretations}
                />
                <QuotaBar 
                    used={quotaUsage.images}
                    limit={DAILY_QUOTA_LIMITS.images}
                    label={t.images}
                />
            </div>
        </div>
    );
};

export default QuotaDisplay;