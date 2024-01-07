import React from 'react';

export interface BackgroundProps {
  backgroundUrl: string;
  children: React.ReactNode;
  className?: string;
}

export function Background({
  children,
  backgroundUrl,
  className,
}: BackgroundProps) {
  return (
    <div className="flex justify-center flex-col bg-stone-800 h-screen">
      <div
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
        className={`bg-scroll bg-cover flex flex-col justify-center p-10 text-center bg-green border-2 border-peach w-full max-h-full aspect-video ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
