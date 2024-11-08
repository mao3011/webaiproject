import { motion } from 'framer-motion';

interface HeroProps {
  reference: React.RefObject<HTMLElement>;
}

export const Hero = ({ reference }: HeroProps) => {
  return (
    <section id="home" ref={reference} className="py-20 bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
        >
          AI搭載の訪問看護支援ソリューション
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 text-gray-600 dark:text-gray-300"
        >
          効率的で質の高い訪問看護サービスを実現
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-md hover:shadow-lg hover:from-blue-600 hover:to-green-600"
        >
          詳細を見る
        </motion.button>
      </div>
    </section>
  );
};