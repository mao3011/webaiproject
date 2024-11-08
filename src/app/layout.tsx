import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  // Variable フォントとして使用する場合は variable オプションを追加
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'AI訪問看護サポート',
  description: '効率的で質の高い訪問看護サービスを実現するAIソリューション',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>{children}</body>
    </html>
  );
}