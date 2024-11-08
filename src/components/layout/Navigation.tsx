'use client';

import { Dispatch, SetStateAction } from 'react';
import type { SectionRefs } from '@/types';

interface NavigationProps {
  activeSection: string;
  sectionRefs: SectionRefs;
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navigation = ({ 
  activeSection, 
  sectionRefs, 
  scrollToSection,
  setIsMenuOpen 
}: NavigationProps) => {
  return (
    <nav className="hidden md:flex space-x-6">
      {Object.entries(sectionRefs).map(([key, _]) => (
        <button
          key={key}
          onClick={() => {
            scrollToSection(key);
            setIsMenuOpen(false);
          }}
          className={`hover:text-green-500 transition-colors text-sm font-medium ${
            activeSection === key ? 'text-green-500 font-semibold' : 'text-gray-800'
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
    </nav>
  );
};