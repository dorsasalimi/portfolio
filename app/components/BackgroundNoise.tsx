// components/BackgroundNoise.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundNoise() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        // Simple static noise pattern (no animation, just random static)
        const generateStaticNoise = () => {
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const value = Math.floor(Math.random() * 255);
                data[i] = value;     // R
                data[i + 1] = value; // G
                data[i + 2] = value; // B
                data[i + 3] = 15;    // A - lower opacity for subtle effect
            }

            ctx.putImageData(imageData, 0, 0);
            animationFrameId = requestAnimationFrame(generateStaticNoise);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        generateStaticNoise();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.12,
                mixBlendMode: 'screen',
            }}
        />
    );
}