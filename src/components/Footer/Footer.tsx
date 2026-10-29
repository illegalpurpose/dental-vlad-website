"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { CurrentYear } from "./CurrentYear";
import styles from "./Footer.module.css";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <p>
                © <CurrentYear /> Dental VLAD. {t.footer.rights}
            </p>
            <p>
                Developed by{" "}
                <a href="mailto:ilia.turturica@gmail.com">
                    ilia.turturica@gmail.com
                </a>
            </p>
        </footer>
    );
}
