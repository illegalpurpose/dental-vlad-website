"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Bounds,
    Center,
    Environment,
    Lightformer,
    useGLTF,
} from "@react-three/drei";
import type { Group } from "three";

const MODEL_URL = "/models/tooth.glb";

function Tooth() {
    const { scene } = useGLTF(MODEL_URL);
    const group = useRef<Group>(null);

    useFrame((state, delta) => {
        const g = group.current;
        if (!g) return;

        // плавно влево-вправо, амплитуда ±0.6 рад (~34°), задняя сторона не видна
        const swing = Math.sin(state.clock.elapsedTime * 0.8) * 0.6;
        g.rotation.y = swing;
    });

    return (
        <group ref={group}>
            <Center>
                <primitive object={scene} />
            </Center>
        </group>
    );
}

export default function ToothScene() {
    return (
        <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, 6], fov: 35 }}
            // pan-y: вертикальный скролл страницы работает и поверх 3D на телефоне
            style={{ touchAction: "pan-y" }}
            gl={{ alpha: true }}
        >
            <ambientLight intensity={0.9} />
            <directionalLight position={[4, 6, 5]} intensity={2.2} />
            <directionalLight
                position={[-5, -2, -3]}
                intensity={0.8}
                color="#9cc2ff"
            />

            {/* Локальное окружение для бликов — без загрузки внешних HDR */}
            <Environment resolution={256}>
                <Lightformer
                    form="rect"
                    intensity={3}
                    position={[0, 5, 4]}
                    scale={[10, 4, 1]}
                />
                <Lightformer
                    form="rect"
                    intensity={1.5}
                    position={[-6, 0, 2]}
                    scale={[4, 8, 1]}
                />
                <Lightformer
                    form="rect"
                    intensity={1.5}
                    position={[6, 0, 2]}
                    scale={[4, 8, 1]}
                />
            </Environment>

            <Suspense fallback={null}>
                <Bounds fit observe margin={1.35}>
                    <Tooth />
                </Bounds>
            </Suspense>
        </Canvas>
    );
}

useGLTF.preload(MODEL_URL);
