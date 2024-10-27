import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <p className="text-sm text-gray-600">Contact at : agoraindia@icloud.com</p>
      </div>
    </footer>
  );
}