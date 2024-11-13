import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'category',
      label: 'Partners',
      link: {
        type: 'doc',
        id: 'index',
      },
      items: [
        {
          type: 'doc',
          id: 'abra/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'q42/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'arctouch/index',
          customProps: { isHidden: true },
        },
      ],
    },
  ],
};

export default sidebars;
