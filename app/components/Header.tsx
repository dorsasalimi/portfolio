'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <nav className="fixed w-full flex justify-center md:justify-end px-4 md:px-20 z-20 flex-wrap items-center gap-12 md:gap-8 lg:gap-10 xl:gap-14 text-[10px] md:text-[12px] lg:text-[17px] py-5">
            <Link
                href="#about"
                className="transition-opacity duration-300 hover:opacity-50 whitespace-nowrap"
            >
                about me
            </Link>

            <Link
                href="#work"
                className="transition-opacity duration-300 hover:opacity-50 whitespace-nowrap"
            >
                work
            </Link>

            <Link
                href="#contact"
                className="transition-opacity duration-300 hover:opacity-50 whitespace-nowrap"
            >
                contact me
            </Link>
        </nav>
    );
}