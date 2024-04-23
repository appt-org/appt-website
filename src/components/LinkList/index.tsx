import { Card } from '@site/src/components';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export type LinkListProps = {
  isHighlighted: boolean;
};

export function LinkList({ isHighlighted, children }: PropsWithChildren<LinkListProps>) {
  if (isHighlighted) {
    const classes = clsx('grid grid-cols-1 gap-4 md:grid-cols-2');

    return <ul className={classes}>{children}</ul>;
  }

  return (
    <div>
      <Card className="p-4" tag="ul">
        {children}
      </Card>
    </div>
  );
}
