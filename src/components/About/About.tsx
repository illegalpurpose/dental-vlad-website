"use client";

import { CLINIC_PHOTO } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Section } from "../Section/Section";
import { Photo } from "../ui/Photo";
import styles from "./About.module.css";

export function About() {
    const { t } = useLanguage();

    return (
        <Section id="about" title={t.about.title} tone="white">
            <div className={styles.grid}>
                <Photo src={CLINIC_PHOTO} alt={t.about.photoAlt} ratio="4 / 3" className={styles.photo} />
                <div className={styles.text}>
                    {t.about.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </Section>
    );
}
