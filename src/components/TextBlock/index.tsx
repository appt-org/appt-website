import { Card } from '@site/src/components';
import { PropsWithChildren } from 'react';

type TextBlockProps = PropsWithChildren & { showBackgroundColor: boolean };

import styles from './styles.module.css';
import clsx from 'clsx';

export function TextBlock({ children, showBackgroundColor }: TextBlockProps) {
  const TextBlockWrapper = showBackgroundColor ? Card : 'div';
  const className = clsx('[&>h2]:mt-0 [&>h3]:mt-0 w-full flex-1 flex flex-col justify-between', styles.wrapper);

  return <TextBlockWrapper className={className}>{children}</TextBlockWrapper>;
}
