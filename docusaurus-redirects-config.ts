export const redirectsConfig =
  process.env.DOCUSAURUS_CURRENT_LOCALE === 'nl'
    ? null
    : [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              to: '/stats/color-contrast',
              from: '/stats/colour-contrast',
            },
            {
              to: '/stats/invert-colors',
              from: '/stats/invert-colours',
            },
            {
              to: '/stats/color-blind-mode',
              from: '/stats/colour-blind-mode',
            },
            {
              to: '/stats/darker-system-colors',
              from: '/stats/darker-system-colours',
            },
          ],
        },
      ];
