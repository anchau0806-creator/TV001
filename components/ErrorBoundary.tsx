import React, { Component, ErrorInfo, ReactNode } from 'react';
import { UI_TEXT } from '../constants';
import type { Language } from '../types';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const getLangFromLocalStorage = (): Language => {
    try {
        const item = window.localStorage.getItem('tarot-lang');
        const lang = item ? JSON.parse(item) : 'vi';
        return lang === 'en' ? 'en' : 'vi';
    } catch {
        return 'vi'; // Default to Vietnamese on parsing error
    }
}

class ErrorBoundary extends Component<Props, State> {
  // FIX: Initialize state as a class property. This resolves errors where `this.state` and `this.props` were considered non-existent on the component instance.
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      const lang = getLangFromLocalStorage();
      const t = UI_TEXT[lang];
      return (
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-center p-4 font-sans">
            <div className="bg-[var(--color-surface)] border border-[var(--color-danger)]/50 rounded-2xl p-8 text-center max-w-md shadow-2xl">
                <i className="fas fa-bomb text-5xl text-[var(--color-danger)] mb-6 animate-pulse"></i>
                <h1 className="text-2xl font-bold text-[var(--color-danger)] mb-3">{t.errorTitle}</h1>
                <p className="text-[var(--color-text)] mb-8">{t.errorMessage}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-[var(--color-primary-strong-hover)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-strong)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <i className="fas fa-sync-alt mr-2"></i>
                    {t.reloadButton}
                </button>
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
