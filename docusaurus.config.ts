import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import { docusaurusContentDocsConfig } from './docusaurus-content-docs-config';
import tailwindPlugin from './plugins/tailwind-config';
import { getTranslatedPath } from './src/utils/route-translations';

const config: Config = {
  title: 'Appt',
  tagline: 'Gids voor het maken van toegankelijke apps',
  favicon: 'favicon.ico',
  noIndex: true, //process.env.ENVIRONMENT !== 'production',
  url: 'https://appt.org',
  baseUrl: process.env.BASE_URL,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
        path: 'en',
      },
      nl: {
        htmlLang: 'nl',
        path: 'nl',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars/sidebarsDocs.ts',
          editUrl: 'https://github.com/appt-org/appt-docusaurus/tree/develop/',
        },
        theme: {
          customCss: [
            './src/css/globals.css',
            './src/css/markdown.css',
            './src/css/layout.css',
            './src/css/stats.css',
            './src/css/partners.css',
            './src/css/sidebar.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [tailwindPlugin, ...docusaurusContentDocsConfig],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Logo Appt',
        src: 'img/light/logos/appt-logo-light.svg',
        srcDark: 'img/dark/logos/appt-logo-dark.svg',
        className: 'nav-logo',
        href: 'https://appt.org',
      },
      items: [
        {
          to: process.env.BASE_URL,
          label: 'Home',
          position: 'right',
          activeBaseRegex: process.env.BASE_URL === '/nl' ? `^\/nl\/$` : `^\/en\/$`,
        },
        { to: `/${getTranslatedPath('stats')}`, label: 'Stats', position: 'right' },
        { to: '/docs', label: 'Docs', position: 'right' },
        { to: `/${getTranslatedPath('guidelines')}`, label: getTranslatedPath('guidelines', true), position: 'right' },
        { to: `/${getTranslatedPath('articles')}`, label: getTranslatedPath('articles', true), position: 'right' },
        { to: `/${getTranslatedPath('partners')}`, label: 'Partners', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
    footer: {
      links: [
        {
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: getTranslatedPath('stats', true),
              to: getTranslatedPath('stats'),
            },
            {
              label: getTranslatedPath('docs', true),
              to: getTranslatedPath('docs'),
            },
            {
              label: getTranslatedPath('guidelines', true),
              to: getTranslatedPath('guidelines'),
            },
            {
              label: getTranslatedPath('articles', true),
              to: getTranslatedPath('articles'),
            },
            {
              label: getTranslatedPath('partners', true),
              to: getTranslatedPath('partners'),
            },
          ],
        },
        {
          items: [
            {
              label: getTranslatedPath('about', true),
              to: getTranslatedPath('about'),
            },
            {
              label: getTranslatedPath('community', true),
              to: getTranslatedPath('community'),
            },
            {
              label: getTranslatedPath('newsletter', true),
              to: getTranslatedPath('newsletter'),
            },
            {
              label: 'Appt app',
              to: getTranslatedPath('appt-app'),
            },
            {
              label: getTranslatedPath('licenses', true),
              to: getTranslatedPath('licenses'),
            },
            {
              label: getTranslatedPath('privacy', true),
              to: getTranslatedPath('privacy'),
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.okaidia,
      darkTheme: prismThemes.okaidia,
      additionalLanguages: ['java', 'kotlin', 'swift', 'objectivec', 'csharp', 'dart'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
