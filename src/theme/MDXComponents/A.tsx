import Link from '@docusaurus/Link';
import { ExternalIcon } from '@site/src/icons';
import type { Props } from '@theme/MDXComponents/A';
import { JSXElementConstructor, ReactElement } from 'react';

export default function MDXA(props: Props): JSX.Element {
  // Hide the external icon for code labels
  const isCodeLabel =
    ((props.children as ReactElement)?.type as JSXElementConstructor<ReactElement>)?.name === 'MDXCode';

  const showExternalIcon = props.href.includes('https') && !isCodeLabel;

  return (
    <Link className="underline text-accent hover:no-underline inline-flex items-center font-normal" {...props}>
      {props.children}
      {showExternalIcon && <ExternalIcon className="w-8 h-8 inline-block" />}
    </Link>
  );
}
