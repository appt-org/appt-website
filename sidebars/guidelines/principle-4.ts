import { getLabel } from './labels';

export const principleFourItems = [
  {
    type: 'category',
    label: getLabel('4.1'),
    link: {
      type: 'doc',
      id: 'wcag/guideline-4-1/index',
    },
    items: [
      {
        type: 'doc',
        label: getLabel('4.1.1'),
        id: 'wcag/success-criterion-4-1-1/index',
      },
      {
        type: 'doc',
        label: getLabel('4.1.2'),
        id: 'wcag/success-criterion-4-1-2/index',
      },
      {
        type: 'doc',
        label: getLabel('4.1.3'),
        id: 'wcag/success-criterion-4-1-3/index',
      },
    ],
  },
];
