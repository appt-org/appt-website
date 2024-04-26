import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
      label: 'WCAG',
      link: {
        type: 'doc',
        id: 'wcag/index',
      },
      items: [
        {
          type: 'category',
          label: '1 Perceivable',
          link: {
            type: 'doc',
            id: 'wcag/principle-1/index',
          },
          items: [
            {
              type: 'category',
              label: '1.1 Text Alternatives',
              link: {
                type: 'doc',
                id: 'wcag/guideline-1-1/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '1.2 Time-based Media',
              link: {
                type: 'doc',
                id: 'wcag/guideline-1-2/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '1.3 Adaptable',
              link: {
                type: 'doc',
                id: 'wcag/guideline-1-3/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '1.4 Distinguishable',
              link: {
                type: 'doc',
                id: 'wcag/guideline-1-4/index',
              },
              items: [],
            },
          ],
        },
        {
          type: 'category',
          label: '2 Operable',
          link: {
            type: 'doc',
            id: 'wcag/principle-2/index',
          },
          items: [
            {
              type: 'category',
              label: '2.1 Keyboard Accessible',
              link: {
                type: 'doc',
                id: 'wcag/guideline-2-1/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '2.2 Enough Time',
              link: {
                type: 'doc',
                id: 'wcag/guideline-2-2/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '2.3 Seizures and Physical Reactions',
              link: {
                type: 'doc',
                id: 'wcag/guideline-2-3/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '2.4 Navigable',
              link: {
                type: 'doc',
                id: 'wcag/guideline-2-4/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '2.5 Input Modalities',
              link: {
                type: 'doc',
                id: 'wcag/guideline-2-5/index',
              },
              items: [],
            },
          ],
        },
        {
          type: 'category',
          label: '3 Understandable',
          link: {
            type: 'doc',
            id: 'wcag/principle-3/index',
          },
          items: [
            {
              type: 'category',
              label: '3.1 Readable',
              link: {
                type: 'doc',
                id: 'wcag/guideline-3-1/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '3.2 Predictable',
              link: {
                type: 'doc',
                id: 'wcag/guideline-3-2/index',
              },
              items: [],
            },
            {
              type: 'category',
              label: '3.3 Input Assistance',
              link: {
                type: 'doc',
                id: 'wcag/guideline-3-3/index',
              },
              items: [],
            },
          ],
        },
        {
          type: 'category',
          label: '4 Robust',
          link: {
            type: 'doc',
            id: 'wcag/principle-4/index',
          },
          items: [
            {
              type: 'category',
              label: '4.1 Compatible',
              link: {
                type: 'doc',
                id: 'wcag/guideline-4-1/index',
              },
              items: [],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
