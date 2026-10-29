"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGUAGES } from "@/i18n/translations";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.switcher} role="group" aria-label="Language">
            {LANGUAGES.map((lang) => (
                <button
                    key={lang}
                    type="button"
                    className={`${styles.option} ${lang === language ? styles.active : ""}`}
                    aria-pressed={lang === language}
                    onClick={() => setLanguage(lang)}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
