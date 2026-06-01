// app/page.tsx
'use client';
import { useEffect } from 'react';
import Header from './components/Header';
import Bow from './components/bow';
import FramerSmoothScroll from './components/FramerSmoothScroll';
import BackgroundNoise from './components/BackgroundNoise';
import SelectedWorks from './components/SelectedWorks';
import MagneticCursor from './components/MagneticCursor';
import MarqueeStrip from './components/MarqueeStrip';
import HiddenTerminal from './components/HiddenTerminal';

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-breathe]');
    let phase = 0;
    const cycle = () => {
      targets.forEach(el => {
        el.style.transition = 'letter-spacing 3.5s cubic-bezier(0.4,0,0.2,1), opacity 3.5s ease';
        if (phase === 0) {
          el.style.letterSpacing = el.dataset.breatheExpand ?? '0.08em';
          el.style.opacity = '1';
        } else {
          el.style.letterSpacing = el.dataset.breatheContract ?? '0em';
          el.style.opacity = '0.75';
        }
      });
      phase = phase === 0 ? 1 : 0;
    };
    cycle();
    const id = setInterval(cycle, 3800);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <HiddenTerminal />
      <MagneticCursor />
      <section className="relative min-h-screen overflow-hidden text-white">
        {/* Background Noise */}
        <BackgroundNoise />
        {/* Gradient Glow */}
        <div className="absolute left-[-200px] top-[200px] h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />

        {/* Hero Section */}
        <div className="z-10 flex min-h-screen flex-col px-8 sm:px-8 md:px-12 lg:px-16 pt-10">

          {/* Main Heading */}
          <div className="relative inline-block md:leading-35 leading-none tracking-widest">
            <h1 className="text-[60px]  md:text-[130px] font-black">Hello.</h1>
            <h1 className="text-[60px] md:text-[130px] font-black">I am
              <span
                className="text-[60px] md:text-[130px] font-black pl-10"
                data-breathe
                data-breathe-expand="0.06em"
                data-breathe-contract="0em"
              >
                Dorsa.
              </span>
            </h1>
          </div>

          {/* Developer Info with Arrow */}
          <div className="flex items-end justify-end gap-6 mt-4 sm:mt-0 md:pl-24">
            <div className='w-full sm:w-1/2 gap-4 flex justify-start'>
              <div className="relative h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px]">
                <svg
                  version="1.1"
                  viewBox="0 0 199.405 199.405"
                  transform="rotate(45)"
                  className="w-full h-full"
                >
                  <polygon
                    points="99.703,199.405 199.405,99.702 99.703,0 71.418,28.285 124.662,81.529 0,81.529 0,117.876 124.662,117.876 71.418,171.12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="pt-1 text-left leading-5 tracking-wider">
                <p className="text-[10px] sm:text-[12px] md:text-[15px] font-black">Developer</p>
                <p className="text-[10px] sm:text-[12px] md:text-[15px] font-black">UX/UI Designer</p>
                <p className="text-[10px] sm:text-[12px] md:text-[15px] font-black">Freelance</p>
              </div>
            </div>
          </div>

          {/* Circle and Date Section */}
          <div className="relative mt-20 md:mt-0 flex flex-1 min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[550px]">
            <div className="relative flex-1">
              {/* Circle SVG */}
              <div className="absolute left-[0px] sm:left-[20px] md:left-[60px] lg:left-[100px] top-[10px] sm:top-[20px] md:top-[30px] lg:top-[40px]">
                <svg
                  width="100%"
                  height="auto"
                  className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
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
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#circleMask)"
                  />
                </svg>
              </div>

              {/* Show Creativity Text */}
              <div className="absolute left-[-20px] md:left-[100px] top-[40px]  md:top-[50px] h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] flex flex-col items-center justify-center text-end">
                <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.4em] lg:tracking-[0.45em] text-white/40">
                  Show
                </p>
                <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.4em] lg:tracking-[0.45em] text-white/40">
                  Creativity
                </p>
              </div>
            </div>

            {/* Date and Status */}
            <div className="absolute left-[5%] sm:left-[12%] md:left-[18%] lg:left-[22%] top-[-10px] sm:top-[10px] md:top-[30px] lg:top-[40px] flex items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              <h2
                className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[130px] font-black leading-none tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em] text-transparent"
                style={{ WebkitTextStroke: '0.3px white' }}
              >
                {new Date().getDate()}
              </h2>

              <div className="mt-2 sm:mt-4 md:mt-8 lg:mt-14">
                <p className="text-[12px] sm:text-[14px] md:text-[20px] lg:text-[25px] font-black leading-none">
                  {new Date()
                    .toLocaleString('default', { month: 'short' })
                    .toUpperCase()}
                </p>

                <p className="mt-1 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-medium text-white/70">
                  available for work
                </p>

                {/* Resume Download Button */}
                <a
                  href="/resume.pdf"
                  download="Dorsa_Resume.pdf"
                  className="mt-3 inline-flex items-center gap-2 group no-underline"
                  onMouseEnter={(e) => {
                    const label =
                      e.currentTarget.querySelector<HTMLSpanElement>('[data-label]');
                    const line =
                      e.currentTarget.querySelector<HTMLSpanElement>('[data-line]');
                    const arrow =
                      e.currentTarget.querySelector<SVGSVGElement>('[data-arrow]');

                    if (label) {
                      label.style.color = 'transparent';
                      label.style.webkitTextStroke = '0.5px white';
                    }

                    if (line) {
                      line.style.width = '100%';
                    }

                    if (arrow) {
                      arrow.style.transform = 'translateY(2px)';
                      arrow.style.stroke = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const label =
                      e.currentTarget.querySelector<HTMLSpanElement>('[data-label]');
                    const line =
                      e.currentTarget.querySelector<HTMLSpanElement>('[data-line]');
                    const arrow =
                      e.currentTarget.querySelector<SVGSVGElement>('[data-arrow]');

                    if (label) {
                      label.style.color = 'rgba(255,255,255,0.5)';
                      label.style.webkitTextStroke = '0px';
                    }

                    if (line) {
                      line.style.width = '0%';
                    }

                    if (arrow) {
                      arrow.style.transform = 'translateY(0px)';
                      arrow.style.stroke = 'rgba(255,255,255,0.5)';
                    }
                  }}
                >
                  <div className="relative">
                    <span
                      data-label
                      className="text-[8px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em]"
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        WebkitTextStroke: '0px',
                        transition: 'color 0.3s, -webkit-text-stroke 0.3s',
                      }}
                    >
                      resume.pdf
                    </span>

                    {/* Underline draw */}
                    <span
                      data-line
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        height: '0.5px',
                        width: '0%',
                        backgroundColor: 'white',
                        transition:
                          'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>

                  {/* Download Arrow */}
                  <svg
                    data-arrow
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]"
                    style={{
                      transition:
                        'transform 0.3s cubic-bezier(0.16,1,0.3,1), stroke 0.3s',
                    }}
                  >
                    <path d="M12 3v13M5 13l7 7 7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="relative mt-[-100px] sm:mt-[-150px] md:mt-[-200px] lg:mt-[-250px] px-4 sm:px-8 z-20">
          <div className='flex items-center justify-center'>
            <div
              className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 font-["UniviaPro-Regular"] p-6 sm:p-8 md:p-10'
              style={{
                position: 'relative',
                margin: '0 auto',
              }}
            >
              <div className="px-4 sm:px-0">
                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed font-['UniviaPro-Regular']">
                  I'm a full-stack developer and UI designer based in Tehran — a dreamer, a digital enthusiast, and a believer in minimal design. When I'm not coding or designing, you'll find me studying software engineering, enjoying a slice of pizza, or (honestly) problem-solving from bed.
                  <br></br>
                  React and Tailwind are my daily tools, and I'm currently exploring the mysterious land of backend development where bugs go to multiply. Full-stack dreams, coffee-fueled nights, and lots of console.log.
                  <br></br>
                  <a
                    href="mailto:hello@youremail.com"
                    className="inline-flex items-baseline cursor-pointer mt-2 no-underline"
                    onMouseEnter={(e) => {
                      const chars =
                        e.currentTarget.querySelectorAll<HTMLSpanElement>('[data-char]');
                      const arrow =
                        e.currentTarget.querySelector<HTMLSpanElement>('[data-arrow]');

                      chars.forEach((el) => {
                        el.style.color = 'transparent';
                        el.style.webkitTextStroke = '0.7px white';
                        el.style.letterSpacing = '0.32em';
                      });

                      if (arrow) {
                        arrow.style.opacity = '1';
                        arrow.style.transform = 'translateX(6px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const chars =
                        e.currentTarget.querySelectorAll<HTMLSpanElement>('[data-char]');
                      const arrow =
                        e.currentTarget.querySelector<HTMLSpanElement>('[data-arrow]');

                      chars.forEach((el) => {
                        el.style.color = 'white';
                        el.style.webkitTextStroke = '0px';
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
                          color: 'white',
                          letterSpacing: '0.18em',
                          WebkitTextStroke: '0px white',
                          transitionProperty:
                            'color, -webkit-text-stroke, letter-spacing',
                          transitionDuration: '0.45s',
                          transitionDelay: `${i * 0.04}s`,
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
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
                        color: 'white',
                        opacity: 0,
                        transform: 'translateX(-6px)',
                        marginLeft: '3px',
                        transitionProperty: 'opacity, transform',
                        transitionDuration: '0.35s',
                        transitionDelay: '0.18s',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
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
        <div className="flex justify-around px-8 md:px-16 py-20 border-t border-b border-white/10 mt-20">
          {[['20+', 'projects'], ['3+', 'years'], ['∞', 'console.log']].map(([num, label]) => (
            <div key={label} className="text-center">
              <p
                className="text-[50px] sm:text-[80px] md:text-[100px] font-black leading-none text-transparent"
                style={{ WebkitTextStroke: '0.5px white' }}
              >{num}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* Selected Works */}
        <SelectedWorks />

        {/* Call to Action */}
        <div className='mt-[100px] sm:mt-[200px] md:mt-[400px] lg:mt-[600px] w-11/12 sm:w-10/12 m-auto px-4 sm:px-0 mb-32'>
          <p className='text-[30px] sm:text-[50px] md:text-[80px] lg:text-[120px] tracking-tight leading-none'>
            i'm always interested about cool stuff.
          </p>
          <p className='text-[30px] sm:text-[50px] md:text-[80px] lg:text-[120px] tracking-tight leading-none mt-2 sm:mt-0'>
            Are you minding a project?
          </p>
          <p className='text-[30px] sm:text-[50px] md:text-[80px] lg:text-[120px] tracking-tight leading-none mt-2 sm:mt-0'>
            Let's talk.
          </p>
        </div>

      </section>
    </>
  );
}