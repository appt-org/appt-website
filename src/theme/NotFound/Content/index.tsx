import Translate, { translate } from '@docusaurus/Translate';
import { CustomLink, Typography } from '@site/src/components';
import type { Props } from '@theme/NotFound/Content';
import clsx from 'clsx';

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx('py-4', className)}>
      <div className="flex flex-col items-center justify-center text-center my-20">
        <Typography tag="h1" size="heading-xl">
          <Translate id="theme.NotFound.title" />
        </Typography>
        <Typography tag="p" className="mt-4">
          <Translate id="theme.NotFound.p1" />
        </Typography>
        <CustomLink
          className={'self-center'}
          url={translate({ id: 'theme.NotFound.homePageLinkHref' })}
          label={translate({ id: 'theme.NotFound.homePageLinkLabel' })}
        />
      </div>
    </main>
  );
}
