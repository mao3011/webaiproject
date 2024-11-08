'use client';

import React from 'react';

export const SOAPRecord: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-md mb-6">
      <p className="text-gray-800">
        <strong>S:</strong> 体調はあまりよくないね。排便もないよ。
      </p>
      <p className="text-gray-800">
        <strong>O:</strong> 三日前から排便なし。嘔気嘔吐あり。食欲不振あり。飲水ほぼ行えていない。訪問時寝たきり状態。ややぐったりしている。
      </p>
      <p className="text-gray-800">
        <strong>A:</strong> 排便コントロール必要。脱水のリスクあり。
      </p>
      <p className="text-gray-800">
        <strong>P:</strong> 摘便、腹部マッサージ施行。水分摂取の促進。状態の継続的モニタリング。
      </p>
    </div>
  );
};