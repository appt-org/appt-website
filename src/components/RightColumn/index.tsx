import React, { ReactElement } from 'react';
import { PropsWithChildren } from 'react';

export function RightColumn({ children }: PropsWithChildren) {
  const clones = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as ReactElement, { order: 2 + index * 2 });
  });

  return <div className="contents">{clones}</div>;
}
