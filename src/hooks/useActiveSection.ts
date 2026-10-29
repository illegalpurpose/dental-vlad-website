"use client";

import { useEffect, useState } from "react";

/** Возвращает id секции, которая сейчас находится под шапкой. */
export function useActiveSection(ids: readonly string[]) {
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                }
            },
            // «рабочая зона» — узкая полоса чуть ниже шапки
            { rootMargin: "-40% 0px -55% 0px" },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [ids]);

    return active;
}
