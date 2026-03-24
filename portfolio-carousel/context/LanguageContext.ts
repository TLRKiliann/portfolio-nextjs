"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
    chooseLang: string;
    setChooseLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [chooseLang, setChooseLang] = useState<string>("FR");

    return React.createElement(
        LanguageContext.Provider,
        { value: { chooseLang, setChooseLang } },
        children
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}