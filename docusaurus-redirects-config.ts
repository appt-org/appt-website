export const redirectsConfig = [
  '@docusaurus/plugin-client-redirects',
  {
    redirects: 
      process.env.DOCUSAURUS_CURRENT_LOCALE === 'nl' ? [
        // nl redirects
        {
          from: '/docs/android/features/keyboard-access',
          to: '/docs/android/functies/toetsenbordbediening',
        },
        {
          from: '/docs/android/features/switch-access',
          to: '/docs/android/functies/toegang-via-schakelaar',
        },
        {
          from: '/docs/android/features/talkback',
          to: '/docs/android/functies/talkback',
        },
        {
          from: '/docs/android/features/voice-access',
          to: '/docs/android/functies/stembediening',
        },
        {
          from: '/docs/ios/features/keyboard-access',
          to: '/docs/ios/functies/toetsenbordbediening',
        },
        {
          from: '/docs/ios/features/switch-control',
          to: '/docs/ios/functies/schakelbediening',
        },
        {
          from: '/docs/ios/features/voice-control',
          to: '/docs/ios/functies/stembediening',
        },
        {
          from: '/docs/ios/features/voiceover',
          to: '/docs/ios/functies/voiceover',
        },
      ] : [
        // en redirects
        {
          from: '/stats/colour-contrast',
          to: '/stats/color-contrast',
        },
        {
          from: '/stats/invert-colours',
          to: '/stats/invert-colors',
        },
        {
          from: '/stats/colour-blind-mode',
          to: '/stats/color-blind-mode',
        },
        {
          from: '/stats/darker-system-colours',
          to: '/stats/darker-system-colors',
        },
      ]
  }
]