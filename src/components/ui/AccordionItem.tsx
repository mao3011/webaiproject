'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

export const AccordionItem = ({ 
  question, 
  answer, 
  isActive, 
  onClick 
}: AccordionItemProps) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 bg-white rounded-lg focus:outline-none shadow-md"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <ChevronDown className={`transform transition-transform ${isActive ? 'rotate-180' : ''} text-green-500`} />
      </button>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-4 bg-gray-50 rounded-b-lg shadow-md"
        >
          <p className="text-gray-600">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};