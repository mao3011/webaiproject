import { motion } from 'framer-motion';
import { Shield, Smartphone, FileText, Table } from 'lucide-react';
import { FeatureCard } from '@/components/ui/FeatureCard';
import type { FeatureItem } from '@/types';

interface FeaturesProps {
  reference: React.RefObject<HTMLElement>;
}

const featuresData: FeatureItem[] = [
  { 
    icon: <Shield className="w-12 h-12 mb-4 text-blue-500" />, 
    title: '患者モニタリング', 
    description: '看護師の記録からデータ分析による、利用者様の状態把握と予測を行います。' 
  },
  { 
    icon: <Smartphone className="w-12 h-12 mb-4 text-green-500" />, 
    title: 'モバイル対応', 
    description: '外出先でも簡単に患者情報にアクセス可能で、リアルタイムでデータを更新できます。' 
  },
  { 
    icon: <FileText className="w-12 h-12 mb-4 text-blue-500" />, 
    title: '訪問看護記録の生成', 
    description: 'AIによるサマリーの作成、報告書の自動生成で、記録作業の効率化を実現します。' 
  },
  { 
    icon: <Table className="w-12 h-12 mb-4 text-green-500" />, 
    title: 'データの自動転記・保存', 
    description: 'Googleスプレッドシートへの自動転記およびAWSデータベースへの保存を行います。' 
  },
];

export const Features = ({ reference }: FeaturesProps) => {
  return (
    <section id="features" ref={reference} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};