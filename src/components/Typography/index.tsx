import type { TypographySize, TypographyTag } from '@site/models';
import { getTypographyClassNames } from '@site/src/utils/typography';
import { HTMLAttributes, PropsWithChildren } from 'react';

export function getTypographySizeByTag(tag: TypographyTag): TypographySize {
  switch (tag) {
    case 'h1':
      return 'heading-xl';
    case 'h2':
      return 'heading-l';
    case 'h3':
      return 'heading-m';
    case 'h4':
      return 'heading-s';
    case 'h5':
      return 'heading-xs';
    case 'h6':
      return 'heading-xs';
    case 'p':
      return 'paragraph';
    case 'span':
      return 'paragraph';
  }
}

export type TypographyProps = {
  className?: string;
  size?: TypographySize;
  tag?: TypographyTag;
  withMargins?: boolean;
} & HTMLAttributes<HTMLElement>;

export function Typography({
  className,
  size = 'paragraph',
  tag = 'p',
  withMargins,
  children,
  ...elementProps
}: PropsWithChildren<TypographyProps>) {
  const TypographyComponent = tag;

  const classes = getTypographyClassNames({
    className,
    size,
    tag,
    withMargins,
  });

  return (
    <TypographyComponent className={classes} {...elementProps}>
      {children}
    </TypographyComponent>
  );
}
