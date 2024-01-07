import classNames from 'classnames';

export interface SelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelChildren?: React.ReactNode;
  options: { id: string | number; label: React.ReactNode }[];
}

export function Selector({ labelChildren, options, ...rest }: SelectorProps) {
  return (
    <select
      aria-label={labelChildren as string}
      {...rest}
      className={classNames(
        `border mb-6 text-sm rounded-lg
           p-2.5 bg-green
          border-emerald placeholder-emerald text-peach focus:ring-emerald
          outline-none
          focus:border-emerald`,
        rest.className,
      )}
    >
      <option value="default" disabled>
        {labelChildren}
      </option>
      {options.map(({ id, label }) => {
        if (id === 'default') return null;
        return (
          <option key={id} value={id}>
            {label}
          </option>
        );
      })}
    </select>
  );
}
