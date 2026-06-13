'use client';

import { useEffect, useRef, useState } from 'react';

export default function MagneticCursor() {
    const [isDesktop, setIsDesktop] = useState(false);

    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    const pos = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreen();
        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
            }

            ring.current.x += (pos.current.x - ring.current.x) * 0.12;
            ring.current.y += (pos.current.y - ring.current.y) * 0.12;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMove);

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(animationId);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <>
            <div
                ref={dotRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full bg-white mix-blend-difference"
            />
        </>
    );
}