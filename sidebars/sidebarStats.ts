import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'category',
      label: 'Accessibility stats',
      link: {
        type: 'doc',
        id: 'index',
      },
      items: [
        {
          type: 'doc',
          id: 'bold-text/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'closed-captions/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'colour-blind-mode/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'colour-contrast/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'dark-mode/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'darker-system-colours/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'display-size/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'download-stats/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'font-size/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'invert-colours/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'keyboard-access/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'mono-audio/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'remove-animations/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'screen-orientation-landscape/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'screen-reader/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'shake-to-undo/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'speak-screen/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'speak-selection/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'switch-control/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'transparency/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'voice-control/index',
          customProps: { isHidden: true },
        },
        {
          type: 'doc',
          id: 'zoom/index',
          customProps: { isHidden: true },
        },
      ],
    },
  ],
};

export default sidebars;
