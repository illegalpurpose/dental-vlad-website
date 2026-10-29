import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    /** Вариант фона секции */
    tone?: "white" | "light" | "dark";
    children: ReactNode;
}

export function Section({ id, title, subtitle, tone = "white", children }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${styles[tone]}`}>
            <div className={styles.container}>
                <header className={styles.heading}>
                    <h2 className={styles.title}>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </header>
                {children}
            </div>
        </section>
    );
}
