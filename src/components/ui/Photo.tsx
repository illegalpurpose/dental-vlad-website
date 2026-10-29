import Image from "next/image";
import styles from "./Photo.module.css";

interface PhotoProps {
    src?: string;
    alt: string;
    /** Соотношение сторон, например "4 / 3" */
    ratio?: string;
    className?: string;
}

/** Фото с аккуратной заглушкой, пока реальное изображение не добавлено. */
export function Photo({
    src,
    alt,
    ratio = "4 / 3",
    className = "",
}: PhotoProps) {
    return (
        <div
            className={`${styles.photo} ${className}`}
            style={{ aspectRatio: ratio }}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    sizes="(max-width: 900px) 100vw, 560px"
                    className={styles.image}
                />
            ) : (
                <svg
                    className={styles.placeholder}
                    viewBox="0 0 64 64"
                    role="img"
                    aria-label={alt}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 10c-6 0-11 5-11 12 0 6 3 10 4 17 1 6 2 15 6 15 3 0 3-9 5-14 1-3 2-4 4-4h4c2 0 3 1 4 4 2 5 2 14 5 14 4 0 5-9 6-15 1-7 4-11 4-17 0-7-5-12-11-12-4 0-6 2-10 2s-6-2-10-2z" />
                </svg>
            )}
        </div>
    );
}
