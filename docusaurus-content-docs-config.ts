import { getTranslatedPath } from './src/utils/translations';

export const docusaurusContentDocsConfig = [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'guidelines',
      path: 'guidelines',
      routeBasePath: getTranslatedPath('guidelines'),
      sidebarPath: './sidebars/guidelines/sidebars.ts',
      editUrl: 'https://github.com/appt-org/appt-docusaurus/tree/develop/',
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'articles',
      path: 'articles',
      routeBasePath: getTranslatedPath('articles'),
      sidebarPath: false,
      editUrl: 'https://github.com/appt-org/appt-docusaurus/tree/develop/',
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'stats',
      path: 'stats',
      routeBasePath: getTranslatedPath('stats'),
      sidebarPath: './sidebars/sidebarStats.ts',
      editUrl: 'https://github.com/appt-org/appt-docusaurus/tree/develop/',
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'about',
      path: 'about',
      routeBasePath: getTranslatedPath('about'),
      sidebarPath: false,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'appt-api',
      path: 'appt-api',
      routeBasePath: getTranslatedPath('appt-api'),
      sidebarPath: false,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'appt-app',
      path: 'appt-app',
      routeBasePath: getTranslatedPath('appt-app'),
      sidebarPath: false,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'community',
      path: 'community',
      routeBasePath: getTranslatedPath('community'),
      sidebarPath: false,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'handbook',
      path: 'handbook',
      routeBasePath: getTranslatedPath('handbook'),
      sidebarPath: false,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'licenses',
      path: 'licenses',
      routeBasePath: getTranslatedPath('licenses'),
      sidebarPath: false,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'newsletter',
      path: 'newsletter',
      routeBasePath: getTranslatedPath('newsletter'),
      sidebarPath: false,
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'partners',
      path: 'partners',
      routeBasePath: getTranslatedPath('partners'),
      sidebarPath: './sidebars/sidebarPartners.ts',
      showLastUpdateTime: true,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'privacy',
      path: 'privacy',
      routeBasePath: getTranslatedPath('privacy'),
      sidebarPath: false,
      showLastUpdateTime: true,
    },
  ],
];
