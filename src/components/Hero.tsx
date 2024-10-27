import React from 'react';

export default function Hero() {
  return (
    <section className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6" style={{ fontFamily: 'pinkendregular, Helvetica' }}>
          Agora
          <br />
          <span className="relative inline-block">
            Your Personal Teacher
            <svg className="absolute -bottom-6 left-0 w-full" viewBox="0 0 400 40">
              <path
                d="M 0 30 Q 60 35, 120 30 T 220 32 T 320 28 T 400 30"
                fill="none"
                stroke="#2563EB"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get unstuck through thoughtful dialogue, just like learning from Socrates himself
        </p>
      </div>
    </section>
  );
}
