"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { ToothViewer } from "./ToothViewer";
import styles from "./Hero.module.css";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero} id="home">
            <div
                className={styles.model}
                role="img"
                aria-label={t.hero.modelLabel}
            >
                <ToothViewer />
            </div>
            <h1 className={styles.logoWrap}>
                <img
                    src="/dental-vlad-website/logo.png"
                    alt={t.hero.logoAlt}
                    width={2076}
                    height={496}
                    className={styles.logo}
                />
            </h1>
        </section>
    );
}
