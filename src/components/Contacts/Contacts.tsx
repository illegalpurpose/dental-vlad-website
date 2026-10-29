"use client";

import { CONTACTS, MAP_EMBED_URL } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Section } from "../Section/Section";
import { ContactItem } from "./ContactItem";
import { FacebookIcon, MailIcon, PhoneIcon } from "./icons";
import styles from "./Contacts.module.css";

export function Contacts() {
    const { t } = useLanguage();

    return (
        <Section id="contacts" title={t.contacts.title} subtitle={t.contacts.subtitle} tone="dark">
            <div className={styles.grid}>
                <div className={styles.list}>
                    <ContactItem
                        icon={<PhoneIcon />}
                        label={t.contacts.phone}
                        value={CONTACTS.phone}
                        href={`tel:${CONTACTS.phone.replace(/\s/g, "")}`}
                    />
                    <ContactItem
                        icon={<MailIcon />}
                        label={t.contacts.email}
                        value={CONTACTS.email}
                        href={`mailto:${CONTACTS.email}`}
                    />
                    <ContactItem
                        icon={<FacebookIcon />}
                        label={t.contacts.facebook}
                        value={CONTACTS.facebookLabel}
                        href={CONTACTS.facebook}
                        external
                    />
                </div>

                <div className={styles.map}>
                    <iframe
                        src={MAP_EMBED_URL}
                        title={t.contacts.mapTitle}
                        className={styles.iframe}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            </div>
        </Section>
    );
}
