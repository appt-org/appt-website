import Link, { NavLinkProps } from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ExternalIcon } from '@site/src/icons';

import clsx from 'clsx';
export type CustomLinkProps = {
  className?: string;
  url: string;
  label: string;
  active?: boolean;
} & NavLinkProps;

export function CustomLink({ label, url, className, active = false }: CustomLinkProps) {
  const { i18n } = useDocusaurusContext();

  const external = url.startsWith('https');

  const classNames = clsx(
    'transition ease-out-quint duration-200 items-center self-end text-accent hover:underline',
    {
      'text-body underline': active,
      'inline-flex': external,
    },
    className,
  );

  const iconClassNames = clsx('w-8 h-8 inline-block');

  return (
    <Link to={url} className={classNames}>
      {label}
      {external && (
        <ExternalIcon aria-label={i18n.currentLocale === 'en' ? 'External' : 'Extern'} className={iconClassNames} />
      )}
    </Link>
  );
}
