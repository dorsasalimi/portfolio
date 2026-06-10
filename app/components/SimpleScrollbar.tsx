'use client';

import { useEffect } from 'react';

export default function SimpleScrollbar() {
    useEffect(() => {
        const container = document.createElement('div');
        container.className = 'custom-scrollbar-container';

        const thumb = document.createElement('div');
        thumb.className = 'custom-scrollbar-thumb';

        container.appendChild(thumb);
        document.body.appendChild(container);

        const updateScrollProgress = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalScroll) * 100;
            thumb.style.height = `${currentProgress}%`;
        };

        const handleClick = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const percentage = y / rect.height;
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo({
                top: totalScroll * percentage,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', updateScrollProgress);
        window.addEventListener('resize', updateScrollProgress);
        container.addEventListener('click', handleClick);

        updateScrollProgress();

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
            window.removeEventListener('resize', updateScrollProgress);
            container.removeEventListener('click', handleClick);
            document.body.removeChild(container);
        };
    }, []);

    return null;
}