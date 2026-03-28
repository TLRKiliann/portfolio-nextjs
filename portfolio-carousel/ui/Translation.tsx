"use client";

import { ChangeEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Translation() {

    const { chooseLang, setChooseLang } = useLanguage();

    const handleLang = (e: ChangeEvent<HTMLSelectElement>): void => {
        const value = e.target.value;
        setChooseLang(value);
    };

    return (
        <div className='fixed flex flex-row items-center justify-end top-0 left-0 right-0 bg-transparent text-white z-50 pt-2 pr-2'>

            <select
                value={chooseLang}
                onChange={handleLang}
                className="text-2xl sm:text-3xl px-1 rounded bg-transparent cursor-pointer text-center focus:outline-none focus:ring-0 focus:border-transparent"
              >
                <option value="FR">🇫🇷</option>
                <option value="EN">🇺🇸</option>
            </select>

        </div>
    )
};