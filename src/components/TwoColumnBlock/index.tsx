import clsx from "clsx";
import { PropsWithChildren } from "react";

export type TwoColumnBlockProps = {
  hasContentNavigation: boolean;
  hasSideNavigation: boolean;
};

export function TwoColumnBlock({
  hasContentNavigation,
  hasSideNavigation,
  children,
}: PropsWithChildren<TwoColumnBlockProps>) {
  const hasLargerBreakpoint = hasContentNavigation || hasSideNavigation;
  const rowClasses = clsx(
    "mx-auto px-4 sm:px-8 max-w-md grid gap-4 grid-cols-1",
    {
      "lg:grid-cols-2 lg:gap-4": !hasLargerBreakpoint,
      "2xl:grid-cols-2 2xl:gap-4": hasLargerBreakpoint,
    }
  );

  const columnClasses = clsx("[&>div]:flex", {
    "[&>div]:max-lg:!order-none": !hasLargerBreakpoint,
    "[&>div]:max-2xl:!order-none": hasLargerBreakpoint,
  });

  const imageClasses = clsx(
    "[&>div>img]:relative [&>div>img]:h-72 [&>div>img]:flex-1 [&>div>img]:self-stretch [&>div>img]:sm:h-96",
    {
      "[&>div>img]:lg:h-auto [&>div>img]:lg:min-h-[360px]":
        !hasLargerBreakpoint,
      "[&>div>img]:2xl:h-auto [&>div>img]:2xl:min-h-[360px]":
        hasLargerBreakpoint,
    }
  );

  const classes = clsx(columnClasses, rowClasses, imageClasses);

  return <div className={classes}>{children}</div>;
}
