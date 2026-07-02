'use client';

export default function HeroSection() {

    return (
        <div className="z-10 flex min-h-screen flex-col px-5 sm:px-8 md:px-12 lg:px-16 pt-32">            <div className="relative inline-block leading-tight md:leading-[1.05] tracking-widest">
            <h1 className="text-[14vw] sm:text-[11vw] md:text-[130px] font-black leading-none">
                Hello.
            </h1>

            <h1 className="text-[14vw] sm:text-[11vw] md:text-[130px] font-black leading-none flex flex-wrap items-baseline">
                <span>I am</span>

                <span
                    className="text-[14vw] sm:text-[11vw] md:text-[130px] font-black md:pl-10 breathe"
                >
                    Dorsa.
                </span>
            </h1>
        </div>

            <div className="flex items-end justify-end gap-6 md:pl-24">
                <div className="w-full sm:w-1/2 gap-4 flex justify-start items-center">
                    <div className="relative h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] flex-shrink-0">
                        <svg
                            width="53px"
                            height="53px"
                            viewBox="0 0 53 53"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                id="arrow-wrap"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="arrow"
                                    transform="translate(-904.000000, -343.000000)"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M912.545285,345 L946.743,379.198 L946.74357,345.246688 L956,345.246688 L956,395 L906.246688,395 L906.246688,385.74357 L940.198,385.743 L906,351.545285 L912.545285,345 Z"
                                        id="wrap-arrow1a"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className="pt-1 text-left leading-4 tracking-widest ml-4">
                        <p className="text-[13px] md:text-[15px] font-black">Developer</p>
                        <p className="text-[13px] md:text-[15px] font-black">UX/UI Designer</p>
                        <p className="text-[13px] md:text-[15px] font-black">Freelance</p>
                    </div>
                </div>
            </div>

            {/* Circle and Date Section */}
            <div className="relative mt-22 md:mt-0 md:mt-0 flex items-center justify-center min-h-[220px] md:min-h-[450px] lg:min-h-[550px]">
                <div className="absolute left-1/2 top-1/2 md:left-[100px] md:top-[30px] lg:left-[150px] lg:top-[40px] -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 w-[270px] h-[270px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] aspect-square">
                    <svg
                        width="100%"
                        height="100%"
                        className="w-full h-full absolute inset-0"
                        viewBox="0 0 400 400"
                    >
                        <defs>
                            <mask id="circleMask">
                                <rect width="400" height="400" fill="white" />
                                <rect x="200" y="0" width="200" height="200" fill="black" />
                            </mask>
                        </defs>

                        <circle
                            cx="200"
                            cy="200"
                            r="199"
                            fill="none"
                            stroke="var(--stroke)"
                            strokeWidth="1"
                            mask="url(#circleMask)"
                        />
                    </svg>

                    {/* Typography Inner Text Layout */}
                    <div className="font-['UniviaPro-Regular'] absolute inset-0 flex items-center justify-center px-2">
                        <div className="flex flex-col items-start text-left md:items-center md:text-center">
                            <p className="text-[12px] lg:text-[16px] uppercase tracking-[0.5em] text-muted leading-normal">
                                Show
                            </p>

                            <p className="text-[12px] lg:text-[16px] uppercase tracking-[0.5em] text-muted leading-normal">
                                Creativity
                            </p>
                        </div>
                    </div>
                </div>

                {/* Date Container */}
                <div className="absolute left-1/3 top-1/4 md:left-[290px] md:top-[30px] lg:left-[410px] lg:top-[40px] translate-x-[35px] sm:translate-x-[45px] -translate-y-[58%] md:translate-x-0 md:translate-y-0 flex items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                    <h2
                        className="text-[12vw] sm:text-[10vw] md:text-[80px] lg:text-[130px] font-black leading-none tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em] text-transparent select-none"
                        style={{ WebkitTextStroke: '0.3px var(--stroke)' }}
                    >
                        {new Date().getDate()}
                    </h2>

                    <div className="mt-2 sm:mt-4 md:mt-8 lg:mt-14">
                        <p className="text-[12px] md:text-[14px] tracking-widest font-black leading-none">
                            {new Date()
                                .toLocaleString('default', { month: 'short' })
                                .toUpperCase()}
                        </p>

                        <p className="font-['UniviaPro-Regular'] mt-1 text-[10px] md:text-[12px] lg:text-[14px] font-medium text-foreground whitespace-nowrap">
                            available for work
                        </p>

                        {/* Resume Download Button */}
                        <a
                            href="/dorsasalimi.pdf"
                            download="dorsasalimi.pdf"
                            className="inline-flex items-center group no-underline resume-download"
                        >
                            <div className="relative">
                                <span
                                    data-label
                                    className="text-[8px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] resume-label"
                                >
                                    resume.pdf
                                </span>

                                <span
                                    data-line
                                    className="resume-line"
                                />
                            </div>

                            <svg
                                data-arrow
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--muted)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] resume-arrow"
                            >
                                <path d="M12 3v13M5 13l7 7 7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}