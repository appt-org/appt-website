import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export type CardProps = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
};

export function Card({ tag, className, children }: PropsWithChildren<CardProps>) {
  const CardElement = tag ?? 'div';
  const classes = clsx('bg-surface p-8 shadow-md', className);

  return <CardElement className={classes}>{children}</CardElement>;
}
