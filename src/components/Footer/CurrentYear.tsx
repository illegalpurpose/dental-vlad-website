"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Текущий год из new Date().getFullYear().
 * Дата читается только в браузере (getSnapshot), поэтому пререндер
 * с cacheComponents не «замораживает» год на момент сборки.
 */
export function CurrentYear() {
    const year = useSyncExternalStore(
        subscribe,
        () => String(new Date().getFullYear()),
        () => "",
    );

    return <span suppressHydrationWarning>{year}</span>;
}
