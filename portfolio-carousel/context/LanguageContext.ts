"use client";

import { LanguageContextType } from "@/lib/type";
import React, { createContext, useContext, useState, ReactNode } from "react";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [chooseLang, setChooseLang] = useState<string>("FR");

    return React.createElement(
        LanguageContext.Provider,
        { value: { chooseLang, setChooseLang } },
        children
    );
};

export function useLanguage() {
    const context: LanguageContextType | undefined = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};