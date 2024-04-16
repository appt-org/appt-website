import { Image, Typography } from '@site/src/components';
import clsx from 'clsx';

type WithImageProps = {
  imageSrc: string;
  imageDarkSrc?: string;
  alt: string;
};

type WithoutImageProps = {
  imageSrc: undefined;
  imageDarkSrc: undefined;
  alt: undefined;
};

export type HeroProps = {
  title: string;
  introText?: string;
} & (WithImageProps | WithoutImageProps);

export function Hero({ title, introText, imageSrc, imageDarkSrc, alt }: HeroProps) {
  const classes = clsx('flex flex-col items-center flex-1 md:flex-row', {
    'justify-center': !!imageSrc,
  });

  const containerClasses = clsx('max-w-md mx-auto px-0 py-8 sm:py-16 sm:px-8', { 'w-full': !imageSrc });

  return (
    <div className="bg-surface shadow-md px-4 lg:px-8">
      <div className={containerClasses}>
        <div className={classes}>
          {!!imageSrc && (
            <div className="relative self-stretch grow-0 mb-8 mt-0 md:my-auto md:mr-8 md:h-auto md:basis-1/3 shrink-0">
              <Image src={imageSrc} dark={imageDarkSrc} alt={alt} />
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
