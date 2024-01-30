import classNames from 'classnames';
import { Paragraph } from './Paragraph';
import { useEffect } from 'react';
import { Button } from './Button';

export interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
  next?: () => void;
  previous?: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
}

export function GameText({
  className,
  children,
  next,
  previous,
  disableNext,
  disablePrevious,
}: ParagraphProps) {
  useEffect(() => {
    const canPrevious = previous && !disablePrevious;
    const canNext = next && !disableNext;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && canPrevious) {
        previous();
      }
      if (
        (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') &&
        canNext
      ) {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [disableNext, disablePrevious, next, previous]);

  return (
    <div
      className={classNames(
        'bg-black',
        'bg-opacity-70',
        'rounded',
        'p-4',
        'w-full',
        'h-[200px]',
        'flex flex-col justify-center',
        className,
      )}
    >
      <Paragraph className="flex flex-col flex-grow justify-center">
        {children}
      </Paragraph>
      <div className={'flex justify-end'}>
        <Button
          className={'w-3/12 pl-2 mr-4 text-xl xl:text-2xl dark:bg-pink'}
          onClick={previous}
          disabled={disablePrevious}
        >
          {'< Previous'}
        </Button>
        <Button
          className={'w-3/12 pl-2 text-xl xl:text-2xl dark:bg-pink'}
          onClick={next}
          disabled={disableNext}
        >
          {'Next >'}
        </Button>
      </div>
    </div>
  );
}
