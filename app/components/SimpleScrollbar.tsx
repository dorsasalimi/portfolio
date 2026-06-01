// components/SimpleScrollbar.tsx
'use client';

import { useEffect } from 'react';

export default function SimpleScrollbar() {
    useEffect(() => {
        // Create the scrollbar elements
        const container = document.createElement('div');
        container.className = 'custom-scrollbar-container';

        const thumb = document.createElement('div');
        thumb.className = 'custom-scrollbar-thumb';

        container.appendChild(thumb);
        document.body.appendChild(container);

        // Update scroll progress
        const updateScrollProgress = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalScroll) * 100;
            thumb.style.height = `${currentProgress}%`;
        };

        // Handle click on scrollbar
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

        // Add event listeners
        window.addEventListener('scroll', updateScrollProgress);
        window.addEventListener('resize', updateScrollProgress);
        container.addEventListener('click', handleClick);

        // Initial update
        updateScrollProgress();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
            window.removeEventListener('resize', updateScrollProgress);
            container.removeEventListener('click', handleClick);
            document.body.removeChild(container);
        };
    }, []);

    return null;
}