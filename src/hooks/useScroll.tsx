import { useEffect, useState } from 'react';
import { SectionRefs } from '@/types';

export const useScroll = (sectionRefs: SectionRefs) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header?.classList.add('bg-opacity-95', 'backdrop-blur-md');
      } else {
        header?.classList.remove('bg-opacity-95', 'backdrop-blur-md');
      }

      const scrollPosition = window.scrollY + 200;

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(key);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return { activeSection };
};