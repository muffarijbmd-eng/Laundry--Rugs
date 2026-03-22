import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

const translations = {
    en: {
        welcome: "Welcome",
        goodbye: "Goodbye",
    },
    ar: {
        welcome: "أهلاً وسهلاً",
        goodbye: "وداعاً",
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const t = (key) => translations[language][key] || key;

    return (
        <TranslationContext.Provider value={{ t, changeLanguage }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    return useContext(TranslationContext);
};
