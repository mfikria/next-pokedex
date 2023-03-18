import { ReactNode } from 'react';

export type TBadge = React.HTMLProps<HTMLDivElement> & {
  children: ReactNode
  color: string
}

function Badge (props) {
  const { children, color, ...rest } = props
  return (
    <span
      style={{ backgroundColor: color }}
      tw="
        inline-block px-2 py-1 rounded-full text-sm font-semibold text-white
      "
      {...rest}
    >
      {children}
    </span>
  );
};

export default Badge;