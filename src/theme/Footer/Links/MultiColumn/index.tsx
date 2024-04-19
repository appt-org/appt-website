import LinkItem from '@theme/Footer/LinkItem';
import type { Props } from '@theme/Footer/Links/MultiColumn';
import { PropsWithChildren } from 'react';
import PartnerColumn from '../../PartnerColumn';
import TextColumn from '../../TextColumn';

type ColumnType = Props['columns'][number];
type ColumnItemType = ColumnType['items'][number];

function ColumnLinkItem({ item }: { item: ColumnItemType }) {
  return item.html ? (
    <li
      className="footer__item flex items-center"
      // Developer provided the HTML, so assume it's safe.
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item my-2">
      <LinkItem item={item} />
    </li>
  );
}

export function Column({
  column,
  children,
  ...props
}: PropsWithChildren<{ column?: ColumnType }> & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col flex-1 gap-8 sm:flex-row" {...props}>
      {column && (
        <>
          <div className="footer__title">{column?.title}</div>
          <ul className="flex flex-1 flex-col -ml-2">
            {column?.items.map((item, i) => <ColumnLinkItem key={i} item={item} />)}
          </ul>
        </>
      )}
      {children}
    </div>
  );
}

export default function FooterLinksMultiColumn({ columns }: Props): JSX.Element {
  return (
    <div className="footer__links flex flex-col gap-8 xl:flex-row w-full">
      <Column className="flex flex-col basis-6/12 mr-4">
        <TextColumn />
      </Column>
      <div className="flex flex-col flex-1 gap-8 sm:flex-row">
        <div className="flex flex-col flex-1 justify-between gap-8 xs:flex-row ">
          {columns.map((column, i) => (
            <Column key={i} column={column} />
          ))}
        </div>
        <Column className="flex flex-col flex-1 gap-8 ">
          <PartnerColumn />
        </Column>
      </div>
    </div>
  );
}
