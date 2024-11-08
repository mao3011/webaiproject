'use client';

import { useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { FAQ } from '@/components/sections/FAQ';
import { Technology } from '@/components/sections/Technology';
import { Contact } from '@/components/sections/Contact';
import { useScroll } from '@/hooks/useScroll';
import type { SectionRefs } from '@/types';

export default function Home() {
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    features: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    technology: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const { activeSection } = useScroll(sectionRefs);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header 
        activeSection={activeSection} 
        sectionRefs={sectionRefs} 
        scrollToSection={scrollToSection} 
      />
      
      <main className="pt-20">
        <Hero reference={sectionRefs.home} />
        <Features reference={sectionRefs.features} />
        <FAQ reference={sectionRefs.faq} />
        <Technology reference={sectionRefs.technology} />
        <Contact reference={sectionRefs.contact} />
      </main>

      <Footer />
    </div>
  );
}