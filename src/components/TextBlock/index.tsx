import { Card } from '@site/src/components';
import { PropsWithChildren } from 'react';

type TextBlockProps = PropsWithChildren & { showBackgroundColor: boolean };

export function TextBlock({ children, showBackgroundColor }: TextBlockProps) {
  const TextBlockWrapper = showBackgroundColor ? Card : 'div';

  return (
    <TextBlockWrapper className="[&>h2]:mt-0 [&>h3]:mt-0 w-full flex-1 flex flex-col justify-between">
      {children}
    </TextBlockWrapper>
  );
}
