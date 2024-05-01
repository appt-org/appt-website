import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { principleOneItems } from './principle-1';
import { getLabel } from './labels';
import { principleTwoItems } from './principle-2';
import { principleThreeItems } from './principle-3';
import { principleFourItems } from './principle-4';

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
          label: getLabel('1'),
          link: {
            type: 'doc',
            id: 'wcag/principle-1/index',
          },
          items: [...(principleOneItems as [])],
        },
        {
          type: 'category',
          label: getLabel('2'),
          link: {
            type: 'doc',
            id: 'wcag/principle-2/index',
          },
          items: [...(principleTwoItems as [])],
        },
        {
          type: 'category',
          label: getLabel('3'),
          link: {
            type: 'doc',
            id: 'wcag/principle-3/index',
          },
          items: [...(principleThreeItems as [])],
        },
        {
          type: 'category',
          label: getLabel('4'),
          link: {
            type: 'doc',
            id: 'wcag/principle-4/index',
          },
          items: [...(principleFourItems as [])],
        },
      ],
    },
  ],
};

export default sidebars;
