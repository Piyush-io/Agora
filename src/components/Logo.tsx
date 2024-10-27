import React from 'react';
import { CircleUserRound, WholeWord } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <WholeWord className="w-6 h-6 text-blue-600" />
      <span className="font-bold tracking-tight">Agora</span>
    </div>
  );
}