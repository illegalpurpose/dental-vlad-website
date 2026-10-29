"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useSyncExternalStore,
    type ReactNode,
} from "react";
import {
    DEFAULT_LANGUAGE,
    LANGUAGES,
    translations,
    type Dictionary,
    type Language,
} from "./translations";

const STORAGE_KEY = "dental-vlad:lang";

/* --- маленькое внешнее хранилище языка (localStorage) --- */
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

function getSnapshot(): Language {
    const stored = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(stored as Language) ? (stored as Language) : DEFAULT_LANGUAGE;
}

const getServerSnapshot = (): Language => DEFAULT_LANGUAGE;

/* --- контекст --- */
interface LanguageContextValue {
    language: Language;
    setLanguage: (language: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const setLanguage = useCallback((next: Language) => {
        localStorage.setItem(STORAGE_KEY, next);
        listeners.forEach((listener) => listener());
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = translations[language].meta.title;
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", translations[language].meta.description);
    }, [language]);

    const value = useMemo(
        () => ({ language, setLanguage, t: translations[language] }),
        [language, setLanguage],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
    return ctx;
}
