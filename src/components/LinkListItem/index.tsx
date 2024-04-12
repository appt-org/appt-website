import { Card, CustomLink, Image, Typography } from "@site/src/components";
import { PropsWithChildren } from "react";

export type LinkListItemProps = {
  title: string;
  url: string;
  pageTitle?: string;
  shortDescription?: string;
  icon?: string;
};

export function LinkListItem({
  url,
  title,
  pageTitle,
  shortDescription,
  icon,
}: PropsWithChildren<LinkListItemProps>) {
  const isHighlighted = !!shortDescription && !!pageTitle;

  function onLinkClick({ title, url }: { title: string; url: string }) {
    // TODO: Analytics
    // logEvent({
    //   event: 'content_block_click',
    //   block_name: 'link_list',
    //   block_item_name: title,
    //   block_item_url: url ,
    // });
  }

  if (isHighlighted) {
    return (
      <Card className="flex flex-col justify-between" tag="li">
        <div>
          <div className="flex items-center mb-4">
            {icon && (
              <div className="mr-4 min-w-fit h-12 w-12">
                <Image
                  className="object-cover h-full w-full max-w-12 max-h-12"
                  src={icon}
                  alt={pageTitle}
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
        <CustomLink
          className="self-end"
          label={title}
          url={url}
          onClick={() => onLinkClick({ title, url })}
        />
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
