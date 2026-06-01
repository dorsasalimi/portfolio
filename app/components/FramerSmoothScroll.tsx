// components/SmoothScroll.tsx
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            // lerp = linear interpolation factor (0–1)
            // 0.08–0.1 is the classic Locomotive Scroll v3 "Patrick David" feel
            // Lower = more inertia/lag, Higher = snappier
            lerp: 0.085,

            // Do NOT set duration or easing when using lerp — they conflict
            smoothWheel: true,

            // 1.0 = native wheel delta, don't throttle it
            wheelMultiplier: 1.0,

            // Helps with trackpad two-finger scroll feel
            touchMultiplier: 2.0,

            // Prevents scroll position jumps during layout shifts
            syncTouch: false,
        });

        // Expose globally for anchor links, scroll-to, etc.
        (window as any).lenis = lenis;

        // KEY FIX: track the inner RAF id, not the outer one
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