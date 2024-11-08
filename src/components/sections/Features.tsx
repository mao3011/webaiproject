'use client';

import { motion } from 'framer-motion';
import { Shield, Smartphone, FileText, Table, ClipboardCheck } from 'lucide-react';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { ChatMessageItem, ChatHeader, CompletionMessage } from '@/components/ui/ChatUI';
import { SOAPRecord } from '@/components/ui/SOAPRecord';
import type { FeatureItem, SectionProps } from '@/types';

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
  { 
    icon: <ClipboardCheck className="w-12 h-12 mb-4 text-blue-500" />, 
    title: '業務負担軽減', 
    description: 'LINEからの簡易入力をAIがSOAP形式に変換し、承認後に自動でデータベースに記録します。' 
  }
];

const userMessages = [
  '排便がない。',
  '三日前',
  '嘔気嘔吐あり。',
  '今日食事とれてない。水分もとれてない。',
  'ややぐったりしている。',
  '訪問時寝たきり。'
];

export const Features = ({ reference }: SectionProps) => {
  return (
    <section id="features" ref={reference} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
        
        {/* 機能カードセクション */}
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

        {/* チャット例示セクション */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">業務負担軽減の具体例</h3>
          <p className="text-gray-600 mb-4">
            LINEの画面からスタッフが以下のような断片的な情報を入力した場合：
          </p>

          {/* ユーザーチャット */}
          <div className="bg-[#7494c0] p-4 rounded-lg mb-6">
            <ChatHeader name="看護師 太郎" />
            <div className="space-y-2">
              {userMessages.map((message, index) => (
                <ChatMessageItem
                  key={index}
                  message={message}
                  time={`${14 + index}:${30 + index}`}
                  isUser={true}
                />
              ))}
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            AIが自動的にSOAP形式に変換し、以下のような記録を生成します：
          </p>

          <SOAPRecord />

          {/* AIアシスタントチャット */}
          <div className="bg-[#7494c0] p-4 rounded-lg">
            <ChatHeader name="AI アシスタント" />
            <ChatMessageItem
              message="SOAP形式の記録を生成しました。確認をお願いします。"
              time="14:40"
            />
            <ChatMessageItem
              message="OK"
              time="14:41"
              isUser={true}
            />
            <CompletionMessage
              message="承認を確認しました。データベースとスプレッドシートに記録を転記します。"
              time="14:42"
            />
          </div>
        </div>
      </div>
    </section>
  );
};