import React from 'react';
import Sidebar from '@theme-original/DocRoot/Layout/Sidebar';
import type SidebarType from '@theme/DocRoot/Layout/Sidebar';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof SidebarType>;

export default function SidebarWrapper(props: Props): JSX.Element {
  const isHidden = props.sidebar.every(category => {
    if ('items' in category && category.items.length > 0) {
      return category.items.every(item => {
        return item.customProps?.isHidden;
      });
    } else {
      return false;
    }
  });

  if (isHidden) return null;

  return (
    <>
      <Sidebar {...props} />
    </>
  );
}
