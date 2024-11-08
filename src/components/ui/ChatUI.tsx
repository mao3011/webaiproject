import React from 'react';
import { User, Check } from 'lucide-react';
import type { ChatMessage } from '@/types';

export const ChatMessageItem: React.FC<ChatMessage> = ({ message, time, isUser }) => {
  return (
    <div className={`bg-white rounded-lg p-2 max-w-xs ${isUser ? 'ml-auto' : ''} ${!isUser ? 'mt-2' : ''}`}>
      <p className="text-gray-800">{message}</p>
      <p className="text-xs text-gray-500 text-right">{time}</p>
    </div>
  );
};

export const ChatHeader: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="bg-white rounded-full p-2 mr-2">
        <User className="w-6 h-6 text-[#7494c0]" />
      </div>
      <span className="text-white font-semibold">{name}</span>
    </div>
  );
};

export const CompletionMessage: React.FC<{ message: string; time: string }> = ({ message, time }) => {
  return (
    <div className="bg-white rounded-lg p-2 max-w-xs mt-2">
      <p className="text-gray-800">{message}</p>
      <div className="flex items-center mt-1">
        <Check className="w-4 h-4 text-green-500 mr-1" />
        <p className="text-xs text-green-500">完了</p>
      </div>
      <p className="text-xs text-gray-500 text-right">{time}</p>
    </div>
  );
};