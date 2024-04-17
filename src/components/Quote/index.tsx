import { CustomLink, Image, Typography } from '@site/src/components';

import clsx from 'clsx';

type ImageProps =
  | {
      imageSrc: string;
      imageDarkSrc?: string;
      alt: string;
    }
  | {
      imageSrc: undefined;
      imageDarkSrc: undefined;
      alt: undefined;
    };

type LinkProps = { linkLabel: string; url: string } | { linkLabel: undefined; url: undefined };

export type QuoteProps = {
  quote: string;
  name: string;
  extraInfo?: string;
  isImageLeft?: boolean;
} & LinkProps &
  ImageProps;

export function Quote({
  quote,
  name,
  extraInfo,
  isImageLeft = true,
  imageSrc,
  imageDarkSrc,
  alt,
  linkLabel,
  url,
}: QuoteProps) {
  const classes = clsx('flex flex-col items-center justify-center md:flex-row mb-12 md:mb-20', {
    'md:flex-row-reverse': !isImageLeft,
  });
  return (
    <div className={classes}>
      {imageSrc && alt && (
        <div className="overflow-hidden relative block flex-1 grow-0 basis-[12.5rem] h-[12.5rem] w-[12.5rem] rounded-full mb-4 md:first:mr-6 md:mb-0">
          <Image className="absolute object-cover w-full h-full" src={imageSrc} dark={imageDarkSrc} alt={alt} />
        </div>
      )}
      <div className="flex-1 flex flex-col max-w-sm text-center md:first:mr-6">
        <blockquote className="border-none">
          <Typography className="before:content-[open-quote] after:content-[close-quote]" tag="p" size="quote">
            {quote}
          </Typography>
        </blockquote>
        <Typography className="mt-4 mx-auto" tag="p" size="paragraph">
          {name}
        </Typography>
        {extraInfo && (
          <Typography className="mx-auto" tag="p" size="paragraph-s">
            {extraInfo}
          </Typography>
        )}
        {linkLabel && url && <CustomLink className="self-end mt-4" url={url} label={linkLabel} />}
      </div>
    </div>
  );
}
