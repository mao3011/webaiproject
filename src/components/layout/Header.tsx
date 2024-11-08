import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Navigation } from './Navigation';
import { SectionRefs } from '@/types';

interface HeaderProps {
  activeSection: string;
  sectionRefs: SectionRefs;
  scrollToSection: (sectionId: string) => void;
}

export const Header = ({ activeSection, sectionRefs, scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <Navigation 
          activeSection={activeSection}
          sectionRefs={sectionRefs}
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 py-4 shadow-lg"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {Object.entries(sectionRefs).map(([key, _]) => (
              <button
                key={key}
                onClick={() => {
                  scrollToSection(key);
                  setIsMenuOpen(false);
                }}
                className={`hover:text-green-500 transition-colors ${
                  activeSection === key ? 'text-green-500 font-semibold' : ''
                }`}
              >
                {key === 'home' ? 'ホーム' : 
                 key === 'features' ? '機能' : 
                 key === 'faq' ? 'FAQ' : 
                 key === 'technology' ? '技術' : 
                 key === 'contact' ? 'お問い合わせ' : key}
              </button>
            ))}
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:from-blue-600 hover:to-green-600">
              無料デモ
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};