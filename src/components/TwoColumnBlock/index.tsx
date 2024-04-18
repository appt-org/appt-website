import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export type TwoColumnBlockProps = {
  hasContentNavigation: boolean;
  hasSideNavigation: boolean;
};

export function TwoColumnBlock({
  hasContentNavigation,
  hasSideNavigation,
  children,
}: PropsWithChildren<TwoColumnBlockProps>) {
  const hasLargerBreakpoint = hasContentNavigation || hasSideNavigation;
  const rowClasses = clsx('grid gap-4 grid-cols-1 mt-10 mb-12 last:mb-0 md:mb-20', {
    'lg:grid-cols-2 lg:gap-4': !hasLargerBreakpoint,
    '2xl:grid-cols-2 2xl:gap-4': hasLargerBreakpoint,
  });

  return <section className={rowClasses}>{children}</section>;
}
