'use client';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="url(#logo-gradient)" />
        <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM18 24V16L24 20L18 24Z" fill="white"/>
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6"/>
            <stop offset="1" stopColor="#10B981"/>
          </linearGradient>
        </defs>
      </svg>
      <div>
        <h1 className="text-xl font-bold leading-tight">AI訪問看護サポート</h1>
        <p className="text-xs text-gray-600">Mobile Assistant Organization Solutions</p>
      </div>
    </div>
  );
};