import { Image, Typography } from "@site/src/components";
import clsx from "clsx";

type WithImageProps = {
  imageLightSrc: string;
  imageDarkSrc?: string;
  alt: string;
};

type WithoutImageProps = {
  imageLightSrc: undefined;
  imageDarkSrc: undefined;
  alt: undefined;
};

export type HeroProps = {
  title: string;
  introText?: string;
} & (WithImageProps | WithoutImageProps);

export function Hero({
  title,
  introText,
  imageLightSrc,
  imageDarkSrc,
  alt,
}: HeroProps) {
  const classes = clsx("flex flex-col items-center flex-1 md:flex-row", {
    "justify-center": !!imageLightSrc,
  });

  return (
    <div className="bg-surface w-screen shadow-md">
      <div className="max-w-md w-full mx-auto px-0 py-8 sm:py-16 sm:px-8">
        <div className={classes}>
          {imageLightSrc && (
            <div className="relative self-stretch grow-0 mb-8 mt-0 md:my-auto md:mr-8 md:h-auto md:basis-1/3 shrink-0">
              <Image
                lightSrc={imageLightSrc}
                darkSrc={imageDarkSrc}
                alt={alt}
              />
            </div>
          )}
          <Typography className="w-full" tag="h1" size="heading-xl">
            {title}
          </Typography>
        </div>
        {introText && (
          <Typography className="pt-4" tag="p" size="paragraph-intro">
            {introText}
          </Typography>
        )}
      </div>
    </div>
  );
}
