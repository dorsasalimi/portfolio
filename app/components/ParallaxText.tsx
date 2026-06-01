// components/ParallaxText.tsx
'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface ParallaxTextProps {
    children: ReactNode;
    depth: 'forward' | 'middle' | 'behind';
    className?: string;
    style?: React.CSSProperties;
}

export default function ParallaxText({
    children,
    depth,
    className = '',
    style = {}
}: ParallaxTextProps) {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const scrollY = window.scrollY;
                let speedMultiplier: number;

                if (depth === 'forward') {
                    speedMultiplier = 0.4;
                } else if (depth === 'middle') {
                    speedMultiplier = 0.3;
                } else {
                    speedMultiplier = 0.6;
                }

                const moveY = -scrollY * speedMultiplier;
                textRef.current.style.transform = `translate3d(0px, ${moveY}px, 0px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [depth]);

    return (
        <div ref={textRef} className={`will-change-transform ${className}`} style={style}>
            {children}
        </div>
    );
}