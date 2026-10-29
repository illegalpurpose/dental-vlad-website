import type { ServiceId, SpecialistId } from "@/data/site";

export const LANGUAGES = ["ro", "ru"] as const;
export type Language = (typeof LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = "ro";

export interface Dictionary {
    meta: { title: string; description: string };
    nav: {
        about: string;
        services: string;
        specialists: string;
        contacts: string;
    };
    hero: { logoAlt: string; modelLabel: string };
    about: { title: string; photoAlt: string; paragraphs: string[] };
    services: {
        title: string;
        subtitle: string;
        items: Record<ServiceId, { title: string; description: string }>;
    };
    specialists: {
        title: string;
        subtitle: string;
        items: Record<SpecialistId, { name: string; role: string }>;
    };
    contacts: {
        title: string;
        subtitle: string;
        phone: string;
        email: string;
        facebook: string;
        mapTitle: string;
    };
    footer: { rights: string };
}

const ru: Dictionary = {
    meta: {
        title: "Dental VLAD - стоматология в Бельцах",
        description:
            "Dental VLAD - современная стоматологическая клиника: лечение, имплантация, ортодонтия, протезирование и эстетическая стоматология.",
    },
    nav: {
        about: "О нас",
        services: "Услуги",
        specialists: "Специалисты",
        contacts: "Контакты",
    },
    hero: { logoAlt: "Dental VLAD", modelLabel: "3D-модель зуба" },
    about: {
        title: "О нас",
        photoAlt: "Клиника Dental VLAD",
        paragraphs: [
            "Dental VLAD - современная стоматологическая клиника в Бельцах, где о здоровье вашей улыбки заботятся внимательно и бережно.",
            "Мы сочетаем актуальные методики лечения, качественные материалы и индивидуальный подход к каждому пациенту - от профилактики и гигиены до сложной имплантации и протезирования.",
            "Наша цель - чтобы визит к стоматологу проходил комфортно, а результат радовал долгие годы.",
        ],
    },
    services: {
        title: "Услуги",
        subtitle: "Полный спектр стоматологической помощи для всей семьи",
        items: {
            therapy: {
                title: "Лечение зубов",
                description:
                    "Лечение кариеса и его осложнений, художественная реставрация и пломбирование современными материалами.",
            },
            hygiene: {
                title: "Профессиональная гигиена",
                description:
                    "Удаление налёта и зубного камня, полировка и фторирование для здоровья дёсен и свежести дыхания.",
            },
            whitening: {
                title: "Отбеливание зубов",
                description:
                    "Безопасное отбеливание, которое возвращает эмали естественный блеск и делает улыбку ярче.",
            },
            implants: {
                title: "Имплантация",
                description:
                    "Восстановление утраченных зубов с помощью надёжных имплантов - надолго и без компромиссов в комфорте.",
            },
            prosthetics: {
                title: "Протезирование",
                description:
                    "Коронки, виниры и съёмные конструкции, которые выглядят естественно и точно подходят вам.",
            },
            orthodontics: {
                title: "Ортодонтия",
                description:
                    "Исправление прикуса и выравнивание зубов с помощью брекетов и элайнеров для взрослых и детей.",
            },
            surgery: {
                title: "Хирургия",
                description:
                    "Удаление зубов, в том числе сложное, и малоинвазивные хирургические вмешательства.",
            },
            pediatric: {
                title: "Детская стоматология",
                description:
                    "Бережное лечение и профилактика для маленьких пациентов в спокойной, дружелюбной атмосфере.",
            },
        },
    },
    specialists: {
        title: "Специалисты",
        subtitle: "Команда врачей, которым можно доверять",
        items: {
            s1: {
                name: "Имя Фамилия",
                role: "Главный врач, стоматолог-хирург",
            },
            s2: { name: "Имя Фамилия", role: "Стоматолог-терапевт" },
            s3: { name: "Имя Фамилия", role: "Стоматолог-ортопед" },
            s4: { name: "Имя Фамилия", role: "Врач-ортодонт" },
        },
    },
    contacts: {
        title: "Контакты",
        subtitle: "Запишитесь на приём - мы будем рады вам помочь",
        phone: "Телефон",
        email: "Email",
        facebook: "Facebook",
        mapTitle: "Dental VLAD на карте Google",
    },
    footer: { rights: "Все права защищены." },
};

const ro: Dictionary = {
    meta: {
        title: "Dental VLAD - stomatologie în Bălți",
        description:
            "Dental VLAD - clinică stomatologică modernă: tratament, implantologie, ortodonție, protetică și stomatologie estetică.",
    },
    nav: {
        about: "Despre noi",
        services: "Servicii",
        specialists: "Specialiști",
        contacts: "Contacte",
    },
    hero: { logoAlt: "Dental VLAD", modelLabel: "Model 3D al unui dinte" },
    about: {
        title: "Despre noi",
        photoAlt: "Clinica Dental VLAD",
        paragraphs: [
            "Dental VLAD este o clinică stomatologică modernă din Bălți, unde sănătatea zâmbetului dumneavoastră este în grija unor specialiști atenți.",
            "Îmbinăm metodele actuale de tratament, materialele de calitate și abordarea individuală a fiecărui pacient - de la profilaxie și igienă până la implantologie și protetică complexă.",
            "Scopul nostru este ca vizita la stomatolog să fie confortabilă, iar rezultatul să vă bucure mulți ani.",
        ],
    },
    services: {
        title: "Servicii",
        subtitle:
            "O gamă completă de îngrijiri stomatologice pentru întreaga familie",
        items: {
            therapy: {
                title: "Tratamentul dinților",
                description:
                    "Tratamentul cariilor și al complicațiilor lor, restaurări estetice și obturații cu materiale moderne.",
            },
            hygiene: {
                title: "Igienă profesională",
                description:
                    "Îndepărtarea plăcii și a tartrului, lustruire și fluorizare pentru gingii sănătoase și respirație proaspătă.",
            },
            whitening: {
                title: "Albirea dinților",
                description:
                    "Albire sigură, care redă smalțului strălucirea naturală și face zâmbetul mai luminos.",
            },
            implants: {
                title: "Implantologie",
                description:
                    "Refacerea dinților pierduți cu implanturi fiabile - pe termen lung și fără compromisuri la confort.",
            },
            prosthetics: {
                title: "Protetică dentară",
                description:
                    "Coroane, fațete și lucrări mobilizabile care arată natural și se potrivesc perfect.",
            },
            orthodontics: {
                title: "Ortodonție",
                description:
                    "Corectarea mușcăturii și alinierea dinților cu aparate dentare și alignere, pentru adulți și copii.",
            },
            surgery: {
                title: "Chirurgie dentară",
                description:
                    "Extracții dentare, inclusiv complexe, și intervenții chirurgicale minim invazive.",
            },
            pediatric: {
                title: "Stomatologie pediatrică",
                description:
                    "Tratament blând și profilaxie pentru cei mici, într-o atmosferă liniștită și prietenoasă.",
            },
        },
    },
    specialists: {
        title: "Specialiști",
        subtitle: "O echipă de medici în care puteți avea încredere",
        items: {
            s1: { name: "Nume Prenume", role: "Medic-șef, stomatolog chirurg" },
            s2: { name: "Nume Prenume", role: "Medic stomatolog terapeut" },
            s3: { name: "Nume Prenume", role: "Medic stomatolog protetician" },
            s4: { name: "Nume Prenume", role: "Medic ortodont" },
        },
    },
    contacts: {
        title: "Contacte",
        subtitle: "Programați-vă la consultație - vă așteptăm cu drag",
        phone: "Telefon",
        email: "Email",
        facebook: "Facebook",
        mapTitle: "Dental VLAD pe harta Google",
    },
    footer: { rights: "Toate drepturile rezervate." },
};

export const translations: Record<Language, Dictionary> = { ro, ru };
