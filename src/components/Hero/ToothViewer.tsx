"use client";

import dynamic from "next/dynamic";

/** WebGL не нужен на сервере — грузим сцену только в браузере. */
export const ToothViewer = dynamic(() => import("./ToothScene"), {
    ssr: false,
    loading: () => null,
});
