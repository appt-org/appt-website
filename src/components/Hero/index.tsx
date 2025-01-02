import { Image, ImagePropsOptional, Typography } from '@site/src/components';
import clsx from 'clsx';

export type HeroProps = {
  title: string;
  description?: string;
  prefix?: string;
  suffix?: string;
} & ImagePropsOptional;

export function Hero({ title, description, prefix, suffix, image, imageDark, alt }: HeroProps) {
  const wrapperClasses = clsx('relative', { 'mb-10': image || description });
  const containerClasses = clsx('hero-container max-w-md mx-auto', { 'w-full': !image }, { 'py-8 sm:py-16': image });

  const prefixSuffixText = prefix && suffix ? `${prefix} - ${suffix}` : prefix ? prefix : suffix ? suffix : undefined;

  return (
    <div className={wrapperClasses}>
      <div className={containerClasses}>
        <div className="flex flex-col flex-1 md:items-center  md:flex-row">
          {!!image && (
            <div className="relative self-stretch grow-0 mb-8 mt-0 md:my-auto md:mr-8 md:h-auto shrink-0">
              <Image 
                src={image} 
                dark={imageDark} 
                alt={alt} 
                className="min-w-16 min-h-16 md:min-w-24 md:min-h-24" />
            </div>
          )}
          <div className="min-w-0">
            {prefixSuffixText && (
              <Typography size="paragraph" className="uppercase">
                {prefixSuffixText}
              </Typography>
            )}
            <Typography className="w-full" tag="h1" size="heading-xl">
              {title}
            </Typography>
          </div>
        </div>
        {description && (
          <Typography className="pt-4" tag="p" size="paragraph-intro">
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
}
