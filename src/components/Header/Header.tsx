"use client";

import { NAV_IDS } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./Header.module.css";

export function Header() {
    const { t } = useLanguage();
    const active = useActiveSection(NAV_IDS);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <nav className={styles.nav} aria-label="Main">
                    {NAV_IDS.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`${styles.link} ${active === id ? styles.active : ""}`}
                            aria-current={active === id ? "true" : undefined}
                        >
                            {t.nav[id]}
                        </a>
                    ))}
                </nav>
                <LanguageSwitcher />
            </div>
        </header>
    );
}
