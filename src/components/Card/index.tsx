import { PropsWithChildren } from 'react';
import classNames from 'classnames';

export type CardProps = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
};

export function Card({ tag, className, children }: PropsWithChildren<CardProps>) {
  const CardElement = tag ?? 'div';
  const classes = classNames('bg-surface p-8 shadow-md', className);

  return <CardElement className={classes}>{children}</CardElement>;
}
