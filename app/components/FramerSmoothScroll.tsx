'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.085,
            smoothWheel: true,
            wheelMultiplier: 1.0,
            // Helps with trackpad two-finger scroll feel
            touchMultiplier: 2.0,
            // Prevents scroll position jumps during layout shifts
            syncTouch: false,
        });
        (window as any).lenis = lenis;
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            delete (window as any).lenis;
        };
    }, []);

    return <>{children}</>;
}