'use client';

export default function AboutSection() {
    return (
        <div
            id="about"
            className="relative mt-[-50px] sm:mt-[-100px] md:mt-[-200px] lg:mt-[-250px] px-4 sm:px-8 z-20 scroll-mt-24"
        >
            <div className="flex items-center justify-center">
                <div
                    className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 font-["UniviaPro-Regular"] p-6 sm:p-8 md:p-10'
                    style={{
                        position: 'relative',
                        margin: '0 auto',
                    }}
                >
                    <div className="px-4 sm:px-0">
                        <p className="text-foreground text-[10px] md:text-lg leading-relaxed font-['UniviaPro-Regular']">
                            I'm a full-stack developer and UI designer based in Tehran — a
                            dreamer, a digital enthusiast, and a believer in minimal design.
                            When I'm not coding or designing, you'll find me studying software
                            engineering, enjoying a slice of pizza, or (honestly)
                            problem-solving from bed.

                            <br />

                            React and Tailwind are my daily tools, and I'm currently exploring
                            the mysterious land of backend development where bugs go to
                            multiply. Full-stack dreams, coffee-fueled nights, and lots of
                            console.log.

                            <br />

                            <a
                                href="mailto:hello@youremail.com"
                                className="inline-flex items-baseline cursor-pointer mt-2 no-underline"
                                onMouseEnter={(e) => {
                                    const chars =
                                        e.currentTarget.querySelectorAll<HTMLSpanElement>(
                                            '[data-char]'
                                        );
                                    const arrow =
                                        e.currentTarget.querySelector<HTMLSpanElement>(
                                            '[data-arrow]'
                                        );

                                    chars.forEach((el) => {
                                        el.style.color = 'transparent';
                                        el.style.setProperty(
                                            '-webkit-text-stroke',
                                            '0.7px var(--stroke)'
                                        );
                                        el.style.letterSpacing = '0.32em';
                                    });

                                    if (arrow) {
                                        arrow.style.opacity = '1';
                                        arrow.style.transform = 'translateX(6px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const chars =
                                        e.currentTarget.querySelectorAll<HTMLSpanElement>(
                                            '[data-char]'
                                        );
                                    const arrow =
                                        e.currentTarget.querySelector<HTMLSpanElement>(
                                            '[data-arrow]'
                                        );

                                    chars.forEach((el) => {
                                        el.style.color = 'var(--foreground)';
                                        el.style.setProperty('-webkit-text-stroke', '0px');
                                        el.style.letterSpacing = '0.18em';
                                    });

                                    if (arrow) {
                                        arrow.style.opacity = '0';
                                        arrow.style.transform = 'translateX(-6px)';
                                    }
                                }}
                            >
                                {['c', 'o', 'n', 't', 'a', 'c', 't'].map((char, i) => (
                                    <span
                                        key={i}
                                        data-char
                                        style={{
                                            display: 'inline-block',
                                            fontSize: '0.75rem',
                                            fontWeight: 900,
                                            textTransform: 'uppercase',
                                            color: 'var(--foreground)',
                                            letterSpacing: '0.18em',
                                            WebkitTextStroke: '0px var(--stroke)',
                                            transitionProperty:
                                                'color, -webkit-text-stroke, letter-spacing',
                                            transitionDuration: '0.45s',
                                            transitionDelay: `${i * 0.04}s`,
                                            transitionTimingFunction:
                                                'cubic-bezier(0.16, 1, 0.3, 1)',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}

                                <span
                                    data-arrow
                                    style={{
                                        display: 'inline-block',
                                        fontSize: '0.7rem',
                                        color: 'var(--foreground)',
                                        opacity: 0,
                                        transform: 'translateX(-6px)',
                                        marginLeft: '3px',
                                        transitionProperty: 'opacity, transform',
                                        transitionDuration: '0.35s',
                                        transitionDelay: '0.18s',
                                        transitionTimingFunction:
                                            'cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                >
                                    →
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}