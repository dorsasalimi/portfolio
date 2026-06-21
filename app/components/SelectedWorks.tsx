'use client';
import { useState, useRef, useEffect } from 'react';

interface WorkItem {
    name: string;
    description: string;
    imagePath: string;
    imageAlt: string;
    align: 'left' | 'right';
    tags?: string[];
    longDescription?: string;
    screenshots?: string[];
    projectUrl?: string;
}

const worksData: WorkItem[] = [
    {
        name: 'Younes moradi',
        description: 'portfolio for an expert seo specialist and wordpress developer',
        imagePath: '/work1.jpg',
        imageAlt: 'Paolo Fornasier',
        align: 'left',
        tags: ['Next js', 'Lenis', 'Framer motion', 'React js'],
        longDescription: 'Reengineering a digital stronghold. This project transforms a traditional WordPress ecosystem into a headless Next.js architectural masterpiece. Built for an elite SEO specialist, the platform merges blazing-fast static generation with fluid, high-fidelity motion graphics driven by Framer Motion and Lenis smooth scrolling—proving that uncompromising luxury aesthetic and peak search engine optimization can coexist flawlessly.',
        screenshots: ['/ym/ym-screenshot1.png', '/ym/ym-screenshot2.png', '/ym/ym-screenshot3.png'],
        projectUrl: 'https://dreamy-tiramisu-8ed490.netlify.app'
    },
    {
        name: 'My Project',
        description: 'hehe this will be filled soon i promise',
        imagePath: '/work2.jpg',
        imageAlt: 'Barbara Scerbo',
        align: 'right',
        tags: ['Creative Coding', 'WebGL', 'Tailwind'],
        longDescription: 'An experimental playground where interactive components break standard viewport boundaries. Coming soon with fully realized modular sections.',
        screenshots: ['/work2.jpg', '/work1.jpg'],
        projectUrl: '#'
    },
    {
        name: 'My Project',
        description: 'hehe this will be filled soon i promise',
        imagePath: '/work3.jpg',
        imageAlt: 'Your Project',
        align: 'left',
        tags: ['Branding', 'Motion Graphics'],
        longDescription: 'A minimalist approach exploring deep contrasts, responsive fluidity, and interactive typography anchors.',
        screenshots: ['/work3.jpg', '/work2.jpg'],
        projectUrl: '#'
    },
];

export default function SelectedWorks() {
    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

    return (
        <div id='work' className="relative mt-[400px] sm:mt-[600px] md:mt-[800px] lg:mt-[1000px] px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
                <div className='flex justify-center'>
                    <div className="mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-black leading-none tracking-wide">Selected_</h2>
                        <h2 className="text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-black leading-none tracking-wide">Works</h2>
                    </div>
                </div>
                <div className="space-y-20 sm:space-y-30 md:space-y-40 lg:space-y-40">
                    {worksData.map((work, index) => (
                        <WorkCard
                            key={index}
                            work={work}
                            index={index}
                            onClick={() => setSelectedWork(work)}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        </div>
    );
}

function WorkCard({ work, index, onClick }: { work: WorkItem; index: number; onClick: () => void }) {
    const isLeftAligned = work.align === 'left';
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();
        const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
        const y = -((e.clientX - rect.left) / rect.width - 0.5) * 10;
        setTilt({ x, y });
    };
    const resetTilt = () => setTilt({ x: 0, y: 0 });

    const getCirclePosition = () =>
        index === 1
            ? 'bottom-[-20px] right-[-20px] sm:bottom-[-30px] sm:right-[-40px] md:right-[-50px] lg:right-[-60px]'
            : 'bottom-[-20px] left-[-20px] sm:bottom-[-30px] sm:left-[-40px] md:left-[-60px] lg:left-[-80px]';

    return (
        <div
            ref={cardRef}
            onClick={onClick}
            className="group cursor-pointer"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0px)' : 'translateY(60px)',
                transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); resetTilt(); }}
        >
            <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-center ${!isLeftAligned ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:text-${isLeftAligned ? 'left' : 'right'} w-full md:w-1/3 px-4 md:px-0`}>
                    <p className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 transition-all duration-300 ${isLeftAligned ? 'md:group-hover:pl-4' : 'md:group-hover:pr-4'}`}>
                        {work.name.split(' ')[0]}_<br />{work.name.split(' ')[1] || ''}
                    </p>
                    <p className={`text-white/60 text-sm sm:text-base mb-4 ${isLeftAligned ? 'md:ml-16' : 'md:mr-16'} font-['UniviaPro-Regular'] w-full md:w-2/3 ${!isLeftAligned ? 'md:ml-auto' : ''} mx-auto md:mx-0`}>
                        {work.description}
                    </p>
                </div>

                <div className="w-full md:w-2/3 relative px-4 md:px-0" ref={imageRef} onMouseMove={handleMouseMove} onMouseLeave={resetTilt}>
                    <div className="relative overflow-visible">
                        <div
                            className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 aspect-[7/4] sm:aspect-[7/3] md:aspect-[7/2] transition-[border,box-shadow] duration-300 group-hover:border-white/30"
                            style={{
                                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
                                transition: 'transform 0.15s ease',
                            }}
                        >
                            <img src={work.imagePath} alt={work.imageAlt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/5" />
                        </div>

                        {isHovered && (
                            <div className={`absolute ${getCirclePosition()} z-20 pointer-events-none`}>
                                <div
                                    style={{ transform: 'perspective(300px) rotateX(40deg) rotateY(-35deg) rotateZ(-10deg)' }}
                                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
                                >
                                    <div className="absolute inset-0 animate-spin-slow">
                                        <svg className="w-full h-full" viewBox="-20 -20 240 240">
                                            <defs>
                                                <path id={`tiltedPath-${index}`} d="M 100,5 A95,95 0 1,1 99.99,5 Z" fill="none" />
                                            </defs>
                                            <text fontSize="22" fontWeight="800" letterSpacing="3" fill="white">
                                                <textPath href={`#tiltedPath-${index}`} startOffset="0%">
                                                    • CLICK TO OPEN • CLICK TO OPEN
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectModal({ work, onClose }: { work: WorkItem | null; onClose: () => void }) {
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (work) {
            setRender(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setRender(false), 600);
            document.body.style.overflow = '';
            return () => clearTimeout(timer);
        }
    }, [work]);

    if (!render || !work) return null;

    const isOpen = !!work;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-500"
                onClick={onClose}
            />

            <div
                className={`relative w-full max-w-6xl h-[85vh] bg-neutral-900/80 border border-white/10 rounded-2xl transition-all duration-700 ease-out custom-scrollbar`}
                style={{
                    clipPath: isOpen ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(20% 40%, 80% 40%, 80% 60%, 20% 60%)',
                    transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(40px)'
                }}
            >
                <div className="sticky top-0 right-0 left-0 flex justify-between items-center p-6 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-transparent z-30">
                    <span className="text-xs font-mono tracking-widest text-white/40">// PROJECT_DETAILS</span>
                    <button
                        onClick={onClose}
                        className="group flex items-center gap-2 text-xs font-mono tracking-widest text-white/60 hover:text-white transition-colors"
                    >
                        CLOSE
                        <span className="inline-block p-2 border border-white/10 rounded-full group-hover:rotate-90 group-hover:border-white/30 transition-transform duration-300">
                            ✕
                        </span>
                    </button>
                </div>

                <div className="px-6 pb-12 pt-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                        <div>
                            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-none mb-4 break-words">
                                {work.name}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {work.tags?.map((tag, i) => (
                                    <span key={i} className="text-[10px] uppercase font-mono tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-white/80 font-light leading-relaxed text-sm sm:text-base border-l-2 border-white/20 pl-4 py-1 mb-8 font-['UniviaPro-Regular']">
                                {work.longDescription || work.description}
                            </p>

                            {work.projectUrl && (
                                <a
                                    href={work.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn inline-flex items-center gap-3 text-xs font-mono tracking-[0.2em] font-bold text-white px-5 py-3 border border-white/20 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300 ease-out"
                                >
                                    VISIT LIVE SITE
                                    <span className="transform group-hover/btn:translate-x-1.5 transition-transform duration-300">
                                        →
                                    </span>
                                </a>
                            )}
                        </div>

                        <div className="hidden lg:block pt-10 border-t border-white/5 font-mono text-[10px] text-white/30 space-y-1">
                            <div>ARCHIVE RECORD_#78492</div>
                            <div>DEPLOYMENT STATUS: OPERATIONAL</div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6 overflow-auto">
                        <div className="text-xs font-mono text-white/40 mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            PROJECT EXHIBIT GAL_
                        </div>

                        <div className="space-y-4">
                            {work.screenshots?.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden group/img rounded-lg border border-white/5 bg-neutral-950 aspect-[23/11] transition-transform duration-500 hover:scale-[1.01]"
                                >
                                    <img
                                        src={src}
                                        alt={`Exhibit ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 rounded text-[9px] font-mono text-white/50 opacity-0 group-hover/img:opacity-100 transition-opacity">
                                        EXHIBIT_0{index + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}