// Import the original mapper
import {
  CodeSample,
  Column,
  ColumnRow,
  Image,
  PercentageBlock,
  TwoColumnBlock,
  Hero,
} from "@site/src/components";

import MDXComponents from "@theme-original/MDXComponents";

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
};
