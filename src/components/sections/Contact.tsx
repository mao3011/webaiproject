'use client';

import React from 'react';
import type { SectionProps } from '@/types';

export const Contact = ({ reference }: SectionProps) => {
  return (
    <section id="contact" ref={reference} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-800">お名前</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-800">メールアドレス</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-gray-800">メッセージ</label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:from-blue-600 hover:to-green-600"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
};