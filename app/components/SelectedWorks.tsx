'use client';
import { useState, useRef, useEffect } from 'react';

interface WorkItem {
    name: string;
    description: string;
    imagePath: string;
    imageAlt: string;
    align: 'left' | 'right';
}

const worksData: WorkItem[] = [
    { name: 'Paolo Fornasier', description: 'The portfolio of Paolo Fornasier, a young Italian musician', imagePath: '/work1.jpg', imageAlt: 'Paolo Fornasier', align: 'left' },
    { name: 'Barbara Scerbo', description: 'The portfolio of Barbara Scerbo, a young Sicilian designer', imagePath: '/work2.jpg', imageAlt: 'Barbara Scerbo', align: 'right' },
    { name: 'Your Project', description: 'A brief description of your amazing project goes here', imagePath: '/work3.jpg', imageAlt: 'Your Project', align: 'left' },
];

export default function SelectedWorks() {
    return (
        <div className="relative mt-[400px] sm:mt-[600px] md:mt-[800px] lg:mt-[1000px] px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
                <div className='flex justify-center'>
                    <div className="mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-black leading-none tracking-wide">Selected_</h2>
                        <h2 className="text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-black leading-none tracking-wide">Works</h2>
                    </div>
                </div>
                <div className="space-y-20 sm:space-y-30 md:space-y-40 lg:space-y-40">
                    {worksData.map((work, index) => (
                        <WorkCard key={index} work={work} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function WorkCard({ work, index }: { work: WorkItem; index: number }) {
    const isLeftAligned = work.align === 'left';
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    // Scroll reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    // Mouse tilt on image
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
                {/* Text */}
                <div className={`md:text-${isLeftAligned ? 'left' : 'right'} w-full md:w-1/3 px-4 md:px-0`}>
                    <p className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 transition-all duration-300 ${isLeftAligned ? 'md:group-hover:pl-4' : 'md:group-hover:pr-4'}`}>
                        {work.name.split(' ')[0]}_<br />{work.name.split(' ')[1]}
                    </p>
                    <p className={`text-white/60 text-sm sm:text-base mb-4 ${isLeftAligned ? 'md:ml-16' : 'md:mr-16'} font-['UniviaPro-Regular'] w-full md:w-2/3 ${!isLeftAligned ? 'md:ml-auto' : ''} mx-auto md:mx-0`}>
                        {work.description}
                    </p>
                </div>

                {/* Image with tilt */}
                <div className="w-full md:w-2/3 relative px-4 md:px-0" ref={imageRef} onMouseMove={handleMouseMove} onMouseLeave={resetTilt}>
                    <div className="relative overflow-visible">
                        <div
                            className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 aspect-[7/4] sm:aspect-[7/3] md:aspect-[7/2] transition-[border,box-shadow] duration-300 group-hover:border-white/30"
                            style={{
                                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
                                transition: 'transform 0.15s ease',
                            }}
                        >
                            <img src={work.imagePath} alt={work.imageAlt} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/10" />
                        </div>

                        {/* Spinning circle with text - KEPT INTACT */}
                        {isHovered && (
                            <div className={`absolute ${getCirclePosition()} z-20`}>
                                <div
                                    style={{ transform: 'perspective(300px) rotateX(40deg) rotateY(-35deg) rotateZ(-10deg)' }}
                                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
                                >
                                    <div className="absolute inset-0 animate-spin-slow">
                                        <svg className="w-full h-full" viewBox="-20 -20 240 240">
                                            <defs>
                                                <path id={`tiltedPath-${index}`} d="M 100,5 A95,95 0 1,1 99.99,5 Z" fill="none" />
                                            </defs>
                                            <text fontSize="23" fontWeight="800" letterSpacing="3" fill="white">
                                                <textPath href={`#tiltedPath-${index}`} startOffset="0%">
                                                    • MORE DETAILS • MORE DETAILS
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