import { TypographySize } from "@site/models";
import { getTypographyClassNames } from "@site/src/utils/typography";
import Heading from "@theme/Heading";
import type { Props } from "@theme/MDXComponents/Heading";

export default function MDXHeading(props: Props): JSX.Element {
  const headingSize = {
    h1: "heading-xl",
    h2: "heading-l",
    h3: "heading-m",
    h4: "heading-s",
    h5: "heading-xs",
    h6: "heading-xs",
  };

  const classes = getTypographyClassNames({
    size: headingSize[props.as as TypographySize],
    tag: props.as,
    withMargins: true,
    className: "mx-auto max-w-md markdown-content",
  });

  return <Heading className={classes} {...props} />;
}
