import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const labels = {
  principle1: {
    en: '1. Perceivable',
    nl: '1. Waarneembaar',
  },
  guideline11: {
    en: '1.1 Text Alternatives',
    nl: '1.1 Tekstalternatieven',
  },
  guideline12: {
    en: '1.2 Time-based Media',
    nl: '1.2 Tijdgebaseerde media',
  },
  guideline13: {
    en: '1.3 Adaptable',
    nl: '1.3 Aanpasbaar',
  },
  guideline14: {
    en: '1.4 Distinguishable',
    nl: '1.4 Onderscheidbaar',
  },
  principle2: {
    en: '2. Operable',
    nl: '2. Bedienbaar',
  },
  guideline21: {
    en: '2.1 Keyboard Accessible',
    nl: '2.1 Toegankelijk met toetsenbord',
  },
  guideline22: {
    en: '2.2 Enough Time',
    nl: '2.2 Voldoende tijd',
  },
  guideline23: {
    en: '2.3 Seizures and Physical Reactions',
    nl: '2.3 Epilepsie en fysieke reacties',
  },
  guideline24: {
    en: '2.4 Navigable',
    nl: '2.4 Navigeerbaar',
  },
  guideline25: {
    en: '2.5 Input Modalities',
    nl: '2.5 Invoermodaliteiten',
  },
  principle3: {
    en: '3. Understandable',
    nl: '3. Begrijpelijk',
  },
  guideline31: {
    en: '3.1 Readable',
    nl: '3.1 Leesbaar',
  },
  guideline32: {
    en: '3.2 Predictable',
    nl: '3.2 Voorspelbaar',
  },
  guideline33: {
    en: '3.3 Input Assistance',
    nl: '3.3 Invoerondersteuning',
  },
  principle4: {
    en: '4. Robust',
    nl: '4. Robuust',
  },
  guideline41: {
    en: '4.1 Compatible',
    nl: '4.1 Compatibel',
  },
  '1.1.1': {
    en: '1.1.1 Non-text Content',
    nl: '1.1.1 Niet-tekstinhoud',
  },
  '1.2.1': {
    en: '1.2.1 Audio-only and Video-only (Prerecorded)',
    nl: '1.2.1 Alleen audio en alleen video (vooraf opgenomen)',
  },
  '1.2.2': {
    en: '1.2.2 Captions (Prerecorded)',
    nl: '1.2.2 Ondertiteling (vooraf opgenomen)',
  },
  '1.2.3': {
    en: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
    nl: '1.2.3 Audiobeschrijving of media-alternatief (vooraf opgenomen)',
  },
  '1.2.4': {
    en: '1.2.4 Captions (Live)',
    nl: '1.2.4 Ondertiteling (live)',
  },
  '1.2.5': {
    en: '1.2.5 Audio Description (Prerecorded)',
    nl: '1.2.5 Audiobeschrijving (vooraf opgenomen)',
  },
  '1.2.6': {
    en: '1.2.6 Sign Language (Prerecorded)',
    nl: '1.2.6 Gebarentaal (vooraf opgenomen)',
  },
  '1.2.7': {
    en: '1.2.7 Extended Audio Description (Prerecorded)',
    nl: '1.2.7 Uitgebreide audiobeschrijving (vooraf opgenomen)',
  },
  '1.2.8': {
    en: '1.2.8 Media Alternative (Prerecorded)',
    nl: '1.2.8 Media-alternatief (vooraf opgenomen)',
  },
  '1.2.9': {
    en: '1.2.9 Audio-only (Live)',
    nl: '1.2.9 Alleen audio (live)',
  },
  '1.3.1': {
    en: '1.3.1 Info and Relationships',
    nl: '1.3.1 Informatie en relaties',
  },
  '1.3.2': {
    en: '1.3.2 Meaningful Sequence',
    nl: '1.3.2 Betekenisvolle volgorde',
  },
  '1.3.3': {
    en: '1.3.3 Sensory Characteristics',
    nl: '1.3.3 Zintuiglijke kenmerken',
  },
  '1.3.4': {
    en: '1.3.4 Orientation',
    nl: '1.3.4 Oriëntatie',
  },
  '1.3.5': {
    en: '1.3.5 Audio-only and Video-only (Prerecorded)',
    nl: '1.3.5 Alleen audio en alleen video (vooraf opgenomen)',
  },
  '1.3.6': {
    en: '1.3.6 Captions (Prerecorded)',
    nl: '1.3.6 Ondertiteling (vooraf opgenomen)',
  },
  '1.4.1': {
    en: '1.4.1 Audio Description or Media Alternative (Prerecorded)',
    nl: '1.4.1 Audiobeschrijving of media-alternatief (vooraf opgenomen)',
  },
  '1.4.2': {
    en: '1.4.2 Captions (Prerecorded)',
    nl: '1.4.2 Ondertiteling (vooraf opgenomen)',
  },
  '1.4.3': {
    en: '1.4.3 Audio Description or Media Alternative (Prerecorded)',
    nl: '1.4.3 Audiobeschrijving of media-alternatief (vooraf opgenomen)',
  },
  '1.4.4': {
    en: '1.4.4 Captions (Live)',
    nl: '1.4.4 Ondertiteling (live)',
  },
  '1.4.5': {
    en: '1.4.5 Audio Description (Prerecorded)',
    nl: '1.4.5 Audiobeschrijving (vooraf opgenomen)',
  },
  '1.4.6': {
    en: '1.4.6 Sign Language (Prerecorded)',
    nl: '1.4.6 Gebarentaal (vooraf opgenomen)',
  },
  '1.4.7': {
    en: '1.4.7 Extended Audio Description (Prerecorded)',
    nl: '1.4.7 Uitgebreide audiobeschrijving (vooraf opgenomen)',
  },
  '1.4.8': {
    en: '1.4.8 Media Alternative (Prerecorded)',
    nl: '1.4.8 Media-alternatief (vooraf opgenomen)',
  },
  '1.4.9': {
    en: '1.4.9 Audio-only (Live)',
    nl: '1.4.9 Alleen audio (live)',
  },
  '1.4.10': {
    en: '1.4.10 Info and Relationships',
    nl: '1.4.10 Informatie en relaties',
  },
  '1.4.11': {
    en: '1.4.11 Meaningful Sequence',
    nl: '1.4.11 Betekenisvolle volgorde',
  },
  '1.4.12': {
    en: '1.4.12 Sensory Characteristics',
    nl: '1.4.12 Zintuiglijke kenmerken',
  },
  '1.4.13': {
    en: '1.4.13 Orientation',
    nl: '1.4.13 Oriëntatie',
  },
};

const getLabel = (key: string) => {
  return process.env.DOCUSAURUS_CURRENT_LOCALE === 'nl' ? labels[key].nl : labels[key].en;
};

const sidebars: SidebarsConfig = {
  sidebar: [
    { type: 'doc', id: 'index' },
    { type: 'doc', id: 'appt-em/index' },
    { type: 'doc', id: 'beginnersguide-accessibility-testing/index' },
    { type: 'doc', id: 'en-301-549/index' },
    { type: 'doc', id: 'section-508/index' },
    { type: 'doc', id: 'wcag-beginners-guide/index' },
    {
      type: 'category',
      label: getLabel('principle1'),
      link: {
        type: 'doc',
        id: 'wcag/index',
      },
      items: [
        {
          type: 'category',
          label: getLabel('guideline11'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-1-1/index',
          },
          items: [
            {
              type: 'doc',
              label: getLabel('1.1.1'),
              id: 'wcag/success-criterion-1-1-1/index',
            },

            {
              type: 'doc',
              label: getLabel('1.2.1'),
              id: 'wcag/success-criterion-1-2-1/index',
            },
            {
              type: 'doc',
              label: getLabel('1.2.2'),
              id: 'wcag/success-criterion-1-2-2/index',
            },
            {
              type: 'doc',
              label: getLabel('1.2.3'),
              id: 'wcag/success-criterion-1-2-3/index',
            },
            {
              type: 'doc',
              label: getLabel('1.2.4'),
              id: 'wcag/success-criterion-1-2-4/index',
            },
            {
              type: 'doc',
              label: getLabel('1.2.5'),
              id: 'wcag/success-criterion-1-2-5/index',
            },
            {
              type: 'doc',
              label: getLabel('1.2.6'),
              id: 'wcag/success-criterion-1-2-6/index',
            },
            {
              type: 'doc',
              label: getLabel('1.2.7'),
              id: 'wcag/success-criterion-1-2-7/index',
            },
            {
              type: 'doc',
              label: getLabel('1.2.8'),
              id: 'wcag/success-criterion-1-2-8/index',
            },
            {
              type: 'doc',
              label: getLabel('1.2.9'),
              id: 'wcag/success-criterion-1-2-9/index',
            },
            {
              type: 'doc',
              label: getLabel('1.3.1'),
              id: 'wcag/success-criterion-1-3-1/index',
            },
            {
              type: 'doc',
              label: getLabel('1.3.2'),
              id: 'wcag/success-criterion-1-3-2/index',
            },
            {
              type: 'doc',
              label: getLabel('1.3.3'),
              id: 'wcag/success-criterion-1-3-3/index',
            },
            {
              type: 'doc',
              label: getLabel('1.3.4'),
              id: 'wcag/success-criterion-1-3-4/index',
            },
            {
              type: 'doc',
              label: getLabel('1.3.5'),
              id: 'wcag/success-criterion-1-3-5/index',
            },
            {
              type: 'doc',
              label: getLabel('1.3.6'),
              id: 'wcag/success-criterion-1-3-6/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.1'),
              id: 'wcag/success-criterion-1-4-1/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.2'),
              id: 'wcag/success-criterion-1-4-2/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.3'),
              id: 'wcag/success-criterion-1-4-3/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.4'),
              id: 'wcag/success-criterion-1-4-4/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.5'),
              id: 'wcag/success-criterion-1-4-5/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.6'),
              id: 'wcag/success-criterion-1-4-6/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.7'),
              id: 'wcag/success-criterion-1-4-7/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.8'),
              id: 'wcag/success-criterion-1-4-8/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.9'),
              id: 'wcag/success-criterion-1-4-9/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.10'),
              id: 'wcag/success-criterion-1-4-10/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.11'),
              id: 'wcag/success-criterion-1-4-11/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.12'),
              id: 'wcag/success-criterion-1-4-12/index',
            },
            {
              type: 'doc',
              label: getLabel('1.4.13'),
              id: 'wcag/success-criterion-1-4-13/index',
            },
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline12'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-1-2/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline13'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-1-3/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline14'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-1-4/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
      ],
    },
    {
      type: 'category',
      label: getLabel('principle2'),
      link: {
        type: 'doc',
        id: 'wcag/principle-2/index',
      },
      items: [
        {
          type: 'category',
          label: getLabel('guideline21'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-2-1/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline22'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-2-2/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline23'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-2-3/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline24'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-2-4/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline25'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-2-5/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
      ],
    },
    {
      type: 'category',
      label: getLabel('principle3'),
      link: {
        type: 'doc',
        id: 'wcag/principle-3/index',
      },
      items: [
        {
          type: 'category',
          label: getLabel('guideline31'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-3-1/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline32'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-3-2/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
        {
          type: 'category',
          label: getLabel('guideline33'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-3-3/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
      ],
    },
    {
      type: 'category',
      label: getLabel('principle4'),
      link: {
        type: 'doc',
        id: 'wcag/principle-4/index',
      },
      items: [
        {
          type: 'category',
          label: getLabel('guideline41'),
          link: {
            type: 'doc',
            id: 'wcag/guideline-4-1/index',
          },
          items: [
            // Add success-criterion items here
          ],
        },
      ],
    },
  ],
};

export default sidebars;
