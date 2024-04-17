import { Image, Typography } from '@site/src/components';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

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

  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const heroRef = useRef<HTMLDivElement>();

  /* Add full width background to hero, as it's the only component that needs to escape the spacing of the Docusaurus' layout container
  // The idea is to create a pseudo element that will be the full width background of the hero
  // This is a workaround to avoid using a custom layout component. It may seem overly complicated, but other approaches require a lot more 'hacks' and code changes/restructuring
  // Additionally, Docusaurus uses different layouts for e.g. docs and pages and this is a universal approach that works in all layouts */
  useEffect(() => {
    setHeight(heroRef?.current?.clientHeight);
    setTop(heroRef?.current?.offsetTop);
    const getHeight = () => {
      setHeight(heroRef.current.clientHeight);
      setTop(heroRef.current.offsetTop);
    };

    window.addEventListener('resize', getHeight);
    return () => window.removeEventListener('resize', getHeight);
  }, []);

  const containerClasses = clsx('max-w-md mx-auto px-0 py-8 sm:py-16 sm:px-8', { 'w-full': !imageSrc });

  return (
    <>
      <div
        className="absolute top-0 left-0 right-0 w-full bg-surface shadow-md"
        style={{ height: `${height + 50}px`, top: `${top - 50}px` }}
      />
      <div className="bg-surface px-4 lg:px-8 relative" ref={heroRef}>
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
    </>
  );
}
