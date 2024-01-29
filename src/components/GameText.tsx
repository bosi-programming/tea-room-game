import classNames from 'classnames';
import { Paragraph } from './Paragraph';
import { useEffect } from 'react';

export interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
  next?: () => void;
}

export function GameText({ className, children, next }: ParagraphProps) {
  useEffect(() => {
    if (!next) {
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [next]);

  return (
    <div
      className={classNames(
        'bg-black',
        'bg-opacity-70',
        'rounded',
        'p-4',
        'w-full',
        'h-[200px]',
        'flex items-center justify-center',
        className,
      )}
    >
      <Paragraph>{children}</Paragraph>
      <button
        className={'pl-2 text-xl xl:text-2xl dark:text-peach'}
        onClick={next}
      >
        {'>'}
      </button>
    </div>
  );
}
