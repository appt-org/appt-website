import { PropsWithChildren } from 'react';
import { Card } from '@site/src/components';

type TextBlockProps = PropsWithChildren & { showBackgroundColor: boolean };

export function TextBlock({ children, showBackgroundColor }: TextBlockProps) {
  const TextBlockWrapper = showBackgroundColor ? Card : 'div';

  return <TextBlockWrapper className="w-full flex-1 flex flex-col justify-between">{children}</TextBlockWrapper>;
}
