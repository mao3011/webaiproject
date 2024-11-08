export interface SectionRefs {
    home: React.RefObject<HTMLElement>;
    features: React.RefObject<HTMLElement>;
    faq: React.RefObject<HTMLElement>;
    technology: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  }
  
  export interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export interface FAQItem {
    question: string;
    answer: string;
  }