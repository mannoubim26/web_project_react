import { createContext, useContext, useState, useCallback } from 'react';
import { DEFAULT_LANGUAGE } from '../constants';

import en from '../languages/en.json';
import es from '../languages/es.json';
import fr from '../languages/fr.json';
import it from '../languages/it.json';

const translations = { en, es, fr, it };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

    const t = useCallback(
        (path) => {
            const keys = path.split('.');
            let result = translations[language];
            for (const key of keys) {
                result = result?.[key];
            }
            return result || path;
        },
        [language]
    );

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
