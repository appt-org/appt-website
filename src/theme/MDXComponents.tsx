// Import the original mapper
import {
  CodeSample,
  ColumnRow,
  CustomLink,
  Hero,
  Image,
  LeftColumn,
  LinkList,
  LinkListItem,
  PercentageBlock,
  Quote,
  RightColumn,
  TextBlock,
  TwoColumnBlock,
  Video,
} from '@site/src/components';

import MDXComponents from '@theme-original/MDXComponents';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Hero,
  TwoColumnBlock,
  ColumnRow,
  LeftColumn,
  RightColumn,
  Image,
  PercentageBlock,
  CodeSample,
  Quote,
  LinkList,
  LinkListItem,
  Video,
  TextBlock,
  CustomLink,
};
