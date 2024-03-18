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
  choices?: string[];
  handleSelectChoice?: (choice: string) => void;
}

export function GameText({
  className,
  children,
  next,
  previous,
  choices,
  handleSelectChoice,
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
      {choices && (
        <div className={'flex justify-center gap-5'}>
          {choices.map((choice, index) => (
            <Button
              key={index}
              className={'w-2/12 pl-2 text-xl xl:text-2xl dark:bg-pink'}
              onClick={() => {
                handleSelectChoice?.(choice);
                if (next) {
                  next();
                }
              }}
            >
              {choice
                .replace(/([A-Z])/g, ' $1')
                .toLowerCase()
                .replace(/^./, (str) => str.toUpperCase())}
            </Button>
          ))}
        </div>
      )}
      {!choices && (
        <div className={'flex justify-end'}>
          {!disablePrevious && (
            <Button
              className={'w-2/12 pl-2 mr-4 text-xl xl:text-2xl dark:bg-pink'}
              onClick={previous}
            >
              {'< Previous'}
            </Button>
          )}
          {!disableNext && (
            <Button
              className={'w-2/12 pl-2 text-xl xl:text-2xl dark:bg-pink'}
              onClick={next}
            >
              {'Next >'}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
