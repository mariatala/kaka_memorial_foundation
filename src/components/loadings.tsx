'use client';

import React from 'react';
import Image from 'next/image';
import { Inter, Gowun_Dodum } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const gowun = Gowun_Dodum({
  weight: '400',
  subsets: ['latin'],
});

const Loading: React.FC = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen bg-primary-dark text-light ${inter.className}`}
    >
      {/* Pulsing Logo */}
      
        <Image
          src="/logo.png" // replace with your actual logo path in /public
          alt="Kaka Memorial Foundation Logo"
          width={120}
          height={120}
          className="drop-shadow-lg"
          priority
        />


      {/* Brand Name */}
      <h1
        className={`mt-6 text-3xl font-semibold tracking-wide text-center ${gowun.className}`}
      >
        Kaka Memorial Foundation
      </h1>

      {/* Loading Text */}
      <p className="mt-3 text-lg opacity-80 animate-pulse">
        Connecting Communities...
      </p>
    </div>
  );
};

export default Loading;
