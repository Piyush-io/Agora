import React from 'react';
import { CircleUserRound } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <Logo />
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-colors">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
}