'use client';

import { motion } from 'framer-motion';
import { Database, MessageCircle, Users, Calendar, Video, Smartphone, Lock } from 'lucide-react';
import { TechCard } from '@/components/ui/TechCard';
import type { FeatureItem, SectionProps } from '@/types';

const techData: FeatureItem[] = [
  {
    icon: <Database className="w-12 h-12 mb-4 text-blue-500" />,
    title: 'ビッグデータ分析',
    description: '大量の医療データを分析し、個々の患者に最適なケアプランを提案します。'
  },
  {
    icon: <MessageCircle className="w-12 h-12 mb-4 text-green-500" />,
    title: 'LINE連携',
    description: 'LINEを通じて患者とのコミュニケーションを円滑に行い、迅速な情報共有を実現します。'
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-blue-500" />,
    title: 'LINE WORKS統合',
    description: 'ビジネス向けLINE WORKSを活用し、セキュアな環境で院内コミュニケーションを効率化します。'
  },
  {
    icon: <Calendar className="w-12 h-12 mb-4 text-green-500" />,
    title: 'Chatwork連携',
    description: 'Chatworkとの連携により、タスク管理やスケジュール調整を一元化し、業務効率を向上させます。'
  },
  {
    icon: <Video className="w-12 h-12 mb-4 text-blue-500" />,
    title: 'Microsoft Teams統合',
    description: 'Teamsを活用してオンライン会議やファイル共有を行い、遠隔でのチーム連携を強化します。'
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-green-500" />,
    title: 'モバイルファースト',
    description: 'スマートフォンやタブレットに最適化されたインターフェースで、外出先でも快適に操作できます。'
  },
  {
    icon: <Lock className="w-12 h-12 mb-4 text-blue-500" />,
    title: '高度なセキュリティ',
    description: '最新の暗号化技術と多層防御システムにより、患者データを安全に保護します。'
  }
];

export const Technology = ({ reference }: SectionProps) => {
  return (
    <section id="technology" ref={reference} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">先進技術</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techData.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TechCard
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};