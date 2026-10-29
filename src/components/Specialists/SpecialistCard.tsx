import { Photo } from "../ui/Photo";
import styles from "./SpecialistCard.module.css";

interface SpecialistCardProps {
    name: string;
    role: string;
    photo?: string;
}

/** Переиспользуемая карточка: фото + имя + должность. */
export function SpecialistCard({ name, role, photo }: SpecialistCardProps) {
    return (
        <article className={styles.card}>
            <Photo src={photo} alt={name} ratio="4 / 5" />
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
            </div>
        </article>
    );
}
