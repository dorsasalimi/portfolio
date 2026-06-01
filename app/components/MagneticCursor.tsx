'use client';
import { useEffect, useRef } from 'react';

export default function MagneticCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>();

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            // Update dot position instantly (no lag)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
            }

            // Update ring with smooth following
            ring.current.x += (pos.current.x - ring.current.x) * 0.12;
            ring.current.y += (pos.current.y - ring.current.y) * 0.12;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        const onEnterLink = () => {
            ringRef.current?.classList.add('scale-[2.5]', 'opacity-30');
        };

        const onLeaveLink = () => {
            ringRef.current?.classList.remove('scale-[2.5]', 'opacity-30');
        };

        window.addEventListener('mousemove', onMove);

        const elements = document.querySelectorAll('a, button, .group');
        elements.forEach(el => {
            el.addEventListener('mouseenter', onEnterLink);
            el.addEventListener('mouseleave', onLeaveLink);
        });

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            elements.forEach(el => {
                el.removeEventListener('mouseenter', onEnterLink);
                el.removeEventListener('mouseleave', onLeaveLink);
            });
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full bg-white mix-blend-difference transition-none" />
        </>
    );
}