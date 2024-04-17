// Import the original mapper
import {
  CodeSample,
  Column,
  ColumnRow,
  Hero,
  Image,
  LinkList,
  LinkListItem,
  PercentageBlock,
  Quote,
  TwoColumnBlock,
  Video,
  TextBlock,
} from '@site/src/components';

import MDXComponents from '@theme-original/MDXComponents';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Hero,
  TwoColumnBlock,
  ColumnRow,
  LeftColumn: Column,
  RightColumn: Column,
  Image,
  PercentageBlock,
  CodeSample,
  Quote,
  LinkList,
  LinkListItem,
  Video,
  TextBlock,
};
