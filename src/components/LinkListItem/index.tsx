import { Card, CustomLink, Image, Typography } from '@site/src/components';
import { PropsWithChildren } from 'react';

// Alt is only required if image is provided
export type LinkListImage =
  | { image: string; imageDark?: string; alt: string }
  | { image: undefined; imageDark: undefined; alt: undefined };

export type LinkListItemProps = {
  title: string;
  url: string;
  label?: string;
  description?: string;
} & LinkListImage;

export function LinkListItem({
  url,
  title,
  label,
  description,
  image,
  imageDark,
  alt,
}: PropsWithChildren<LinkListItemProps>) {
  const isHighlighted = !!description && !!label;

  if (isHighlighted) {
    return (
      <Card className="flex flex-col justify-between" tag="li">
        <div>
          <div className="flex items-center mb-4">
            {image && (
              <div className="mr-4 min-w-fit">
                <Image
                  className="object-cover h-full w-full max-w-12 max-h-12"
                  src={image}
                  dark={imageDark}
                  alt={alt}
                />
              </div>
            )}

            <Typography tag="h3" size="heading-m">
              {label}
            </Typography>
          </div>
          <Typography className="mb-4" tag="p" size="paragraph">
            {description}
          </Typography>
        </div>
        <CustomLink className="self-end" label={title} url={url} />
      </Card>
    );
  }

  return (
    <div className="border-t -px-3 border-onsurface first:border-t-0 flex">
      <CustomLink
        className="p-3 w-full"
        url={url}
        label={title}
        onClick={() => onLinkClick({ title: label, url })}
      />
    </div>
  );
}
