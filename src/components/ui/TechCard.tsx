'use client';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const TechCard = ({ icon, title, description }: TechCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};