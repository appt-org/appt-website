import { PropsWithChildren } from 'react';

export function ColumnRow({ children, order }: PropsWithChildren<{ order: number }>) {
  const orderStyle = order > 0 ? { order } : undefined;

  return (
    <div className="flex max-lg:!order-none" style={orderStyle}>
      {children}
    </div>
  );
}
