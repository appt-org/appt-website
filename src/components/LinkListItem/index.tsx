import { Card, CustomLink, Image, Typography } from '@site/src/components';
import { PropsWithChildren } from 'react';

// Alt is only required if icon is provided
export type LinkListImage =
  | { icon: string; darkIcon?: string; iconAlt: string }
  | { icon: undefined; darkIcon: undefined; iconAlt: undefined };

export type LinkListItemProps = {
  title: string;
  url: string;
  pageTitle?: string;
  shortDescription?: string;
} & LinkListImage;

export function LinkListItem({
  url,
  title,
  pageTitle,
  shortDescription,
  icon,
  darkIcon,
  iconAlt,
}: PropsWithChildren<LinkListItemProps>) {
  const isHighlighted = !!shortDescription && !!pageTitle;

  if (isHighlighted) {
    return (
      <Card className="flex flex-col justify-between" tag="li">
        <div>
          <div className="flex items-center mb-4">
            {icon && (
              <div className="mr-4 min-w-fit">
                <Image
                  className="object-cover h-full w-full max-w-12 max-h-12"
                  src={icon}
                  dark={darkIcon}
                  alt={iconAlt}
                />
              </div>
            )}

            <Typography tag="h3" size="heading-m">
              {pageTitle}
            </Typography>
          </div>
          <Typography className="mb-4" tag="p" size="paragraph">
            {shortDescription}
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
        onClick={() => onLinkClick({ title: pageTitle, url })}
      />
    </div>
  );
}
