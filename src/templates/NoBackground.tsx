import React from 'react';

export interface NoBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function NoBackground({ children, className }: NoBackgroundProps) {
  return (
    <div className="flex justify-center flex-col bg-stone-800 h-screen">
      <div
        className={`flex flex-col justify-center p-10 text-center bg-green border-2 border-peach w-full max-h-full aspect-video ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
