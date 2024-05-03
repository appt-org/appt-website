import { CustomLink, Image, ImagePropsOptional, Typography } from '@site/src/components';

import clsx from 'clsx';

type LinkProps = { label: string; url: string } | { label: undefined; url: undefined };

export type QuoteProps = {
  quote: string;
  name: string;
  extraInfo?: string;
  isImageLeft?: boolean;
} & LinkProps & ImagePropsOptional;

export function Quote({
  quote,
  name,
  extraInfo,
  isImageLeft = true,
  image,
  imageDark,
  alt,
  label,
  url,
}: QuoteProps) {
  const classes = clsx('markdown-block flex flex-col items-center justify-center md:flex-row mb-12 md:mb-20', {
    'md:flex-row-reverse': !isImageLeft,
  });
  return (
    <div className={classes}>
      {image && alt && (
        <div className="overflow-hidden relative block flex-1 grow-0 basis-[12.5rem] h-[12.5rem] w-[12.5rem] rounded-full mb-4 md:first:mr-6 md:mb-0">
          <Image className="absolute object-cover w-full h-full" src={image} dark={imageDark} alt={alt} />
        </div>
      )}
      <div className="flex-1 flex flex-col max-w-sm md:first:mr-6">
        <blockquote className="border-none p-0">
          <Typography className="before:content-[open-quote] after:content-[close-quote]" tag="p" size="quote">
            {quote}
          </Typography>
        </blockquote>
        <Typography className="mt-4" tag="p" size="paragraph">
          {name}
        </Typography>
        {extraInfo && (
          <Typography className="mx-auto" tag="p" size="paragraph-s">
            {extraInfo}
          </Typography>
        )}
        {label && url && <CustomLink className="self-end mt-4" url={url} label={label} />}
      </div>
    </div>
  );
}
