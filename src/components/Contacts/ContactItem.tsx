import type { ReactNode } from "react";
import styles from "./ContactItem.module.css";

interface ContactItemProps {
    icon: ReactNode;
    label: string;
    value: string;
    href: string;
    external?: boolean;
}

/** Строка контакта: иконка + подпись + ссылка. */
export function ContactItem({ icon, label, value, href, external }: ContactItemProps) {
    return (
        <a
            className={styles.item}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            <span className={styles.icon} aria-hidden="true">
                {icon}
            </span>
            <span className={styles.text}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
            </span>
        </a>
    );
}
