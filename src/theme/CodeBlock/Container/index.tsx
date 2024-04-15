import { ThemeClassNames, usePrismTheme } from '@docusaurus/theme-common';
import { getPrismCssVariables } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export default function CodeBlockContainer<T extends 'div' | 'pre'>({
  as: As,
  ...props
}: { as: T } & ComponentProps<T>): JSX.Element {
  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);
  return (
    <As
      // Polymorphic components are hard to type, without `oneOf` generics
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      style={prismCssVariables}
      className={clsx(
        props.className,
        ThemeClassNames.common.codeBlock,
        'bg-surface shadow-code rounded-2xl relative group my-4 p-4',
      )}
    />
  );
}
