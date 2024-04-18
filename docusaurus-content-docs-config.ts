import { getTranslatedPath } from './src/utils/route-translations';

export const docusaurusContentDocsConfig = [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'guidelines',
      path: 'guidelines',
      routeBasePath: getTranslatedPath('guidelines'),
      sidebarPath: './sidebarsGuidelines.ts',
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'articles',
      path: 'articles',
      routeBasePath: getTranslatedPath('articles'),
      sidebarPath: false,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'stats',
      path: 'stats',
      routeBasePath: getTranslatedPath('stats'),
      sidebarPath: false,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'about',
      path: 'about',
      routeBasePath: getTranslatedPath('about'),
      sidebarPath: false,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'appt-api',
      path: 'appt-api',
      routeBasePath: getTranslatedPath('appt-api'),
      sidebarPath: false,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'appt-app',
      path: 'appt-app',
      routeBasePath: getTranslatedPath('appt-app'),
      sidebarPath: false,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'community',
      path: 'community',
      routeBasePath: getTranslatedPath('community'),
      sidebarPath: false,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'handbook',
      path: 'handbook',
      routeBasePath: getTranslatedPath('handbook'),
      sidebarPath: false,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'licenses',
      path: 'licenses',
      routeBasePath: getTranslatedPath('licenses'),
      sidebarPath: false,
    },
  ],
];
