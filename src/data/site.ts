/**
 * Статические (не переводимые) данные сайта.
 * Все тексты лежат в src/i18n/translations.ts и подтягиваются по id.
 */

export const NAV_IDS = [
    "about",
    "services",
    "specialists",
    "contacts",
] as const;
export type NavId = (typeof NAV_IDS)[number];

export const SERVICE_IDS = [
    "therapy",
    "hygiene",
    "whitening",
    "implants",
    "prosthetics",
    "orthodontics",
    "surgery",
    "pediatric",
] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export const SPECIALIST_IDS = ["s1", "s2", "s3", "s4"] as const;
export type SpecialistId = (typeof SPECIALIST_IDS)[number];

/**
 * Фото специалистов: положите файлы в /public/images/specialists/
 * и укажите путь, например "/images/specialists/s1.jpg".
 * Пока путь не задан — показывается заглушка.
 */
export const SPECIALIST_PHOTOS: Partial<Record<SpecialistId, string>> = {
    // s1: "/images/specialists/s1.jpg",
};

/** Фото клиники для секции «О нас», например "/images/clinic.jpg". */
export const CLINIC_PHOTO: string | undefined = "./images/clinic.jpg";

/** TODO: заменить на реальные контакты клиники. */
export const CONTACTS = {
    phone: "+373 797 33 221",
    email: "srl.dentalvlad@gmail.com",
    facebook: "https://www.facebook.com/dentalvladstomatologie",
    facebookLabel: "Dental VLAD",
} as const;

export const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2276.732036008298!2d27.90442839225463!3d47.766070899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb67db4be5b20d%3A0x5d1c20b7f4464098!2sDental%20Vlad!5e1!3m2!1sen!2s!4v1793263962276!5m2!1sen!2s";
