import type { TypographySize, TypographyTag } from "@site/models";
import classNames from "classnames";

export const getTypographyClassNames = ({
  className,
  size,
  tag,
  withMargins,
}: {
  className?: string;
  size?: TypographySize;
  tag?: TypographyTag;
  withMargins?: boolean;
}) => {
  const textSizes = {
    "text-heading-xxl": size === "heading-xxl",
    "text-mobile-heading-xl sm:text-heading-xl": size === "heading-xl",
    "text-heading-l": size === "heading-l",
    "text-heading-m": size === "heading-m",
    "text-heading-s": size === "heading-s",
    "text-heading-xs": size === "heading-xs",
    "text-paragraph": size === "paragraph",
    "text-paragraph-intro": size === "paragraph-intro",
    "text-paragraph-s": size === "paragraph-s",
    "text-menu-item": size === "menu-item",
    "text-input-label": size === "input-label",
    "text-quote": size === "quote",
  };

  const textLineHeights = {
    "leading-heading-xxl": size === "heading-xxl",
    "leading-heading-xl": size === "heading-xl",
    "leading-heading-l": size === "heading-l",
    "leading-heading-m": size === "heading-m",
    "leading-heading-s": size === "heading-s",
    "leading-heading-xs": size === "heading-xs",
    "leading-paragraph": size === "paragraph",
    "leading-paragraph-intro": size === "paragraph-intro",
    "leading-paragraph-s": size === "paragraph-s",
    "leading-menu-item": size === "menu-item",
    "leading-input-label": size === "input-label",
    "leading-quote": size === "quote",
  };

  const isLight = [
    "heading-xxl",
    "heading-xl",
    "heading-l",
    "heading-m",
    "heading-s",
  ].includes(size);

  const isNormal = [
    "paragraph",
    "paragraph-s",
    "menu-item",
    "input-label",
  ].includes(size);

  const isMedium = ["heading-xs", "paragraph-intro", "quote"].includes(size);

  const isItalic = ["quote"].includes(size);

  const textWeights = {
    "font-light": isLight,
    "font-normal": isNormal,
    "font-medium": isMedium,
  };

  const textMargins = {
    "mt-12 mb-4": size === "heading-l",
    "mt-12 mb-3": size === "heading-m",
    "mt-10 mb-3": size === "heading-s",
    "mt-8": size === "heading-xs",
    "my-4": size === "paragraph",
  };

  const textStyles = {
    italic: isItalic,
  };

  const hyphenationRule = {
    "hyphens-auto": tag === "h1",
  };

  const classes = classNames(
    "text-body max-w-[44rem] break-words",
    {
      ...textSizes,
      ...textLineHeights,
      ...textWeights,
      ...(withMargins && textMargins),
      ...textStyles,
      ...hyphenationRule,
    },
    className
  );
  return classes;
};
