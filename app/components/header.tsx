// components/VerticalRightHeaderWithIcons.jsx
import Link from 'next/link';

const Header = () => {
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed right-0 top-0 h-screen w-24 text-white z-50">
            <nav className="h-full flex flex-col items-center justify-center gap-6">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="group flex flex-col items-center py-4 gap-2 hover:scale-110 transition-transform duration-200"
                    >
                        <span className="transform -rotate-90 whitespace-nowrap text-lg font-medium ">
                            {item.name}
                        </span>

                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;