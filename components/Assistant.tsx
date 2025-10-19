import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../App';
import { getAssistantResponse } from '../services/geminiService';
import type { AssistantMessage } from '../types';

const Assistant: React.FC = () => {
    const { 
        t, 
        language,
        isAssistantOpen, 
        setIsAssistantOpen, 
        assistantMessages, 
        setAssistantMessages,
        settings,
        resetAssistant,
    } = useAppContext();

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if(isAssistantOpen) {
            scrollToBottom();
        }
    }, [assistantMessages, isAssistantOpen]);

    const handleRefresh = () => {
        resetAssistant();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const newUserMessage: AssistantMessage = {
            id: Date.now(),
            role: 'user',
            content: input.trim(),
        };
        
        const currentHistory = [...assistantMessages, newUserMessage];
        setAssistantMessages(currentHistory);
        setInput('');
        setIsLoading(true);

        try {
            const responseContent = await getAssistantResponse(currentHistory, language, settings);
            const newModelMessage: AssistantMessage = {
                id: Date.now() + 1,
                role: 'model',
                content: responseContent,
            };
            setAssistantMessages(prev => [...prev, newModelMessage]);
        } catch (error) {
            const errorMessageContent = error instanceof Error ? error.message : "Sorry, I encountered an error. Please try again.";
            const errorMessage: AssistantMessage = {
                id: Date.now() + 1,
                role: 'model',
                content: errorMessageContent,
            };
            setAssistantMessages(prev => [...prev, errorMessage]);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            {/* Chat Panel */}
            <div className={`fixed bottom-24 right-4 sm:right-8 z-[90] w-[calc(100%-2rem)] max-w-sm h-[60vh] max-h-[500px] bg-[rgba(var(--color-surface-rgb),var(--opacity-surface))] backdrop-blur-md rounded-2xl shadow-2xl border border-[var(--color-border)] flex flex-col transition-all duration-300 ease-in-out ${isAssistantOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                {/* Header */}
                <header className="flex justify-between items-center p-4 border-b border-[var(--color-border)] flex-shrink-0">
                    <h3 className="font-bold text-[var(--color-primary)]"><i className="fas fa-robot mr-2"></i>{t.assistantTitle}</h3>
                    <div className="flex items-center space-x-2">
                        <button onClick={handleRefresh} aria-label={t.refreshConversation} className="text-lg text-[var(--color-text-muted)] hover:text-white leading-none p-1">
                            <i className="fas fa-sync-alt"></i>
                        </button>
                        <button onClick={() => setIsAssistantOpen(false)} aria-label="Close assistant" className="text-2xl text-[var(--color-text-muted)] hover:text-white leading-none p-1">&times;</button>
                    </div>
                </header>
                
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {assistantMessages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-lg animate-fade-in-up ${msg.role === 'user' ? 'bg-[var(--color-primary-strong)] text-white' : 'bg-[var(--color-surface-light)]'}`}>
                                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex justify-start">
                            <div className="max-w-[80%] p-3 rounded-lg bg-[var(--color-surface-light)]">
                               <div className="flex items-center space-x-1">
                                    <span className="h-2 w-2 bg-[var(--color-text-muted)] rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                    <span className="h-2 w-2 bg-[var(--color-text-muted)] rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                    <span className="h-2 w-2 bg-[var(--color-text-muted)] rounded-full animate-pulse"></span>
                               </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                {/* Input */}
                <div className="p-4 border-t border-[var(--color-border)] flex-shrink-0">
                    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder={t.assistantPlaceholder}
                            className="flex-1 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-strong)] text-sm"
                            disabled={isLoading}
                            aria-label={t.assistantPlaceholder}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="bg-[var(--color-primary-strong-hover)] text-white rounded-lg w-10 h-10 flex items-center justify-center disabled:bg-[var(--color-surface-light)] disabled:cursor-not-allowed hover:bg-[var(--color-primary-strong)] transition-colors flex-shrink-0" aria-label="Send message">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* FAB */}
            <button onClick={() => setIsAssistantOpen(!isAssistantOpen)} className="fixed bottom-8 right-4 sm:right-8 z-[100] w-16 h-16 bg-[var(--color-primary-strong-hover)] text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-[var(--color-primary-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-transform transform hover:scale-110" aria-label={isAssistantOpen ? "Close assistant" : "Open assistant"}>
                <i className={`fas transition-transform duration-300 ${isAssistantOpen ? 'fa-times rotate-180' : 'fa-comment-dots'}`}></i>
            </button>
        </>
    )
};

export default Assistant;