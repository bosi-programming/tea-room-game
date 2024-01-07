import classNames from 'classnames';

export interface HeadingProps {
  className?: string;
  children?: React.ReactNode;
}

export function Heading({ className, children }: HeadingProps) {
  return (
    <h1
      className={classNames(
        'text-4xl',
        'font-bold',
        'font-mono',
        'text-pink',
        className,
      )}
    >
      {children}
    </h1>
  );
}
