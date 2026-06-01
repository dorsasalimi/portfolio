'use client';
import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&';

export default function ScrambleText({ text, className }: { text: string; className?: string }) {
    const [display, setDisplay] = useState(text);
    const iteration = useRef(0);
    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        iteration.current = 0;
        intervalRef.current = setInterval(() => {
            setDisplay(
                text.split('').map((char, i) => {
                    if (char === ' ') return ' ';
                    if (i < iteration.current) return text[i];
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join('')
            );
            if (iteration.current >= text.length) clearInterval(intervalRef.current);
            iteration.current += 0.5;
        }, 40);
        return () => clearInterval(intervalRef.current);
    }, [text]);

    return <span className={className}>{display}</span>;
}