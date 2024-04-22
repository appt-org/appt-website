import React, { useState } from 'react';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import type { Props } from '@theme/DocRoot/Layout';

export default function DocRootLayout({ children }: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);

  const isSideBarHidden = sidebar?.items.every(category => {
    if ('items' in category && category.items.length > 0) {
      return category.items.every(item => {
        return item.customProps?.isHidden;
      });
    } else {
      return false;
    }
  });

  const classNames = isSideBarHidden
    ? 'mx-auto px-4 sm:px-8 max-w-md'
    : 'mx-auto px-4 sm:px-8 flex flex-col md:flex-row max-w-xl';

  return (
    <div>
      <BackToTopButton />
      <div className={classNames}>
        {sidebar && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>{children}</DocRootLayoutMain>
      </div>
    </div>
  );
}
