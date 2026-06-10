import BackgroundNoise from './components/BackgroundNoise';
import SelectedWorks from './components/SelectedWorks';
import MagneticCursor from './components/MagneticCursor';
import HiddenTerminal from './components/HiddenTerminal';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <HiddenTerminal />
      <MagneticCursor />
      <section className="relative min-h-[100svh] overflow-x-hidden bg-background text-foreground">
        <BackgroundNoise />
        <div className="absolute left-[-200px] top-[200px] h-[500px] w-[500px] rounded-full bg-glow blur-[140px]" />
        <HeroSection />
        <AboutSection />
        <SelectedWorks />
        <ContactSection />
      </section>
    </>
  );
}