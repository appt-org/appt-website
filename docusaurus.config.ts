import type * as Preset from '@docusaurus/preset-classic';
import type { Config, HtmlTagObject } from '@docusaurus/types';
import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import { docusaurusContentDocsConfig } from './docusaurus-content-docs-config';
import tailwindPlugin from './plugins/tailwind-config';
import { getTranslatedAnnouncement, getTranslatedPath } from './src/utils/translations';
import { analyticsConfig } from './docusaurus-analytics-config';
import { redirectsConfig } from './docusaurus-redirects-config';

const headTags: HtmlTagObject[] = [
  {
    tagName: 'link',
    attributes: {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `${process.env.BASE_URL}/apple-touch-icon.png`,
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${process.env.BASE_URL}/favicon-32x32.png`,
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${process.env.BASE_URL}/favicon-16x16.png`,
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'manifest',
      href: `${process.env.BASE_URL}/manifest.webmanifest`,
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'mask-icon',
      href: `${process.env.BASE_URL}/safari-pinned-tab.svg`,
      color: '#5bbad5',
    },
  },
];

const plugins = redirectsConfig
  ? [tailwindPlugin, ...docusaurusContentDocsConfig, redirectsConfig]
  : [tailwindPlugin, ...docusaurusContentDocsConfig];

analyticsConfig && headTags.push(analyticsConfig);

const config: Config = {
  title: 'Appt',
  tagline: 'Gids voor het maken van toegankelijke apps',
  favicon: 'favicon.ico',
  noIndex: process.env.ENVIRONMENT !== 'production',
  url: 'https://appt.org',
  baseUrl: process.env.BASE_URL,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  headTags,
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
          editUrl: 'https://github.com/appt-org/appt-website/tree/develop/',
          showLastUpdateTime: true,
          editLocalizedFiles: true,
        },
        theme: {
          customCss: [
            './src/css/globals.css',
            './src/css/markdown.css',
            './src/css/layout.css',
            './src/css/stats.css',
            './src/css/partners.css',
            './src/css/sidebar.css',
            './src/css/search.css',
            './src/css/announcement.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins,
  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Logo Appt',
        src: 'img/light/logos/appt.svg',
        srcDark: 'img/dark/logos/appt.svg',
        className: 'nav-logo',
        href: process.env.BASE_URL,
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
      maxHeadingLevel: 4,
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
      additionalLanguages: ['java', 'kotlin', 'swift', 'objectivec', 'csharp', 'dart', 'json', , 'markdown'],
    },
    algolia: {
      appId: '6XBZ8SDI3N',
      apiKey: '904315b2e60e7af6603eb4e9ff0cdb56',
      indexName: 'appt2',
    },
    announcementBar: {
      id: 'new_site',
      content: getTranslatedAnnouncement(),
      backgroundColor: 'rgb(var(--color-accent))',
      textColor: 'rgb(var(--color-onaccent))',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
