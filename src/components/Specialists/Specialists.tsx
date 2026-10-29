"use client";

import { SPECIALIST_IDS, SPECIALIST_PHOTOS } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Section } from "../Section/Section";
import { SpecialistCard } from "./SpecialistCard";
import styles from "./Specialists.module.css";

export function Specialists() {
    const { t } = useLanguage();

    return (
        <Section
            id="specialists"
            title={t.specialists.title}
            subtitle={t.specialists.subtitle}
            tone="white"
        >
            <div className={styles.grid}>
                {SPECIALIST_IDS.map((id) => (
                    <SpecialistCard
                        key={id}
                        name={t.specialists.items[id].name}
                        role={t.specialists.items[id].role}
                        photo={SPECIALIST_PHOTOS[id]}
                    />
                ))}
            </div>
        </Section>
    );
}
