'use client';

import { motion } from 'framer-motion';
import { AccordionItem } from '@/components/ui/AccordionItem';
import { useState } from 'react';
import type { FAQItem } from '@/types';

interface FAQProps {
  reference: React.RefObject<HTMLElement>;
}

const faqData: FAQItem[] = [
  {
    question: 'このAIシステムの導入にどのくらいの時間がかかりますか？',
    answer: '基本的な導入は2〜3週間程度で完了します。ただし、既存のシステムとの統合や特別なカスタマイズが必要な場合は、さらに時間がかかる可能性があります。'
  },
  {
    question: '患者データのセキュリティは大丈夫ですか？',
    answer: 'はい、患者データの安全性は最優先事項です。最新の暗号化技術を使用し、HIPAA準拠のセキュリティ対策を実施しています。また、定期的なセキュリティ監査も行っています。'
  }
];

export const FAQ = ({ reference }: FAQProps) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="faq" ref={reference} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        <div className="max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={activeAccordion === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};