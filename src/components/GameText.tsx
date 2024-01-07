import classNames from 'classnames';
import { Paragraph } from './Paragraph';

export interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

export function GameText({ className, children }: ParagraphProps) {
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
      <Paragraph>{children}</Paragraph>
    </div>
  );
}
