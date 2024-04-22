import React from 'react';
import type { Props } from '@theme/DocRoot/Layout/Main';

export default function DocRootLayoutMain({ children }: Props): JSX.Element {
  return <main className="flex-auto py-6 sm:py-12 overflow-hidden">{children}</main>;
}
