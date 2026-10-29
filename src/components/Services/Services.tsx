"use client";

import { SERVICE_IDS } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Section } from "../Section/Section";
import { ServiceCard } from "./ServiceCard";
import styles from "./Services.module.css";

export function Services() {
    const { t } = useLanguage();

    return (
        <Section id="services" title={t.services.title} subtitle={t.services.subtitle} tone="light">
            <div className={styles.grid}>
                {SERVICE_IDS.map((id) => (
                    <ServiceCard
                        key={id}
                        title={t.services.items[id].title}
                        description={t.services.items[id].description}
                    />
                ))}
            </div>
        </Section>
    );
}
