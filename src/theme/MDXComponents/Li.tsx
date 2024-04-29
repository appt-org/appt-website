import React, { type ReactNode } from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import type { Props } from '@theme/MDXComponents/Li';
import MDXUl from '@theme/MDXComponents/Ul';

export default function MDXLi(props: Props): ReactNode | undefined {
  // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
  useBrokenLinks().collectAnchor(props.id);

  const hasMultipleChildren = Array.isArray(props.children);
  const hasNestedLists =
    hasMultipleChildren &&
    (props.children as { type: { name: string } | string }[]).some(
      child => child.type === MDXUl || child.type === 'ol',
    );

  const wrappableChildren = hasNestedLists
    ? ((props.children as { type: { name: string } | string }[]).filter(
        child => !(child.type === MDXUl) && !(child.type === 'ol'),
      ) as React.ReactNode)
    : props.children;
  const listChildren = hasNestedLists
    ? ((props.children as { type: { name: string } | string }[]).filter(
        child => child.type === MDXUl || child.type === 'ol',
      ) as React.ReactNode)
    : [];

  return (
    <li {...props}>
      {wrappableChildren && (
        <p className="text-body max-w-[44rem] break-words text-paragraph leading-paragraph font-normal my-4">
          {wrappableChildren}
        </p>
      )}
      {listChildren && <>{listChildren}</>}
    </li>
  );
}
