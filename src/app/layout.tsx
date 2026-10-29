import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { DEFAULT_LANGUAGE, translations } from "@/i18n/translations";
import "./globals.css";

const defaults = translations[DEFAULT_LANGUAGE].meta;

export const metadata: Metadata = {
    title: defaults.title,
    description: defaults.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang={DEFAULT_LANGUAGE}>
            <body>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
