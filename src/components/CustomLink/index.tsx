import Link, { NavLinkProps } from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LinkAppearance } from '@site/models';
import { ExternalIcon } from '@site/src/icons';

import clsx from 'clsx';
export type CustomLinkProps = {
  className?: string;
  url: string;
  label: string;
  external?: boolean;
  appearance?: LinkAppearance;
  active?: boolean;
} & NavLinkProps;

export function CustomLink({ label, url, className, external, appearance, active = false }: CustomLinkProps) {
  const { i18n } = useDocusaurusContext();

  const linkAppearance = appearance?.toLowerCase();
  const isExternal = external || url.startsWith('https');
  const isButton = linkAppearance === LinkAppearance.PrimaryButton || linkAppearance === LinkAppearance.SecondaryButton;

  const classNames = clsx(
    {
      'transition ease-out-quint duration-200 items-center self-end inline text-accent hover:underline': !isButton,
      'text-body underline': active,
      'inline-flex': isExternal && !isButton,
      'flex-row-reverse pl-4 gap-2': isExternal && isButton, // Show icon on the left if the link is styled as a button
      'leading-paragraph text-paragraph hover:no-underline flex max-w-max py-1.5 px-6 my-4 rounded-lg border-2 border-accent transition-all hover:border-accent-hover duration-200 out-quint max-w-full break-words':
        isButton,
      'bg-accent text-onaccent hover:bg-accent-hover hover:shadow-elevate hover:text-onaccent':
        linkAppearance === LinkAppearance.PrimaryButton,
      'text-accent hover:text-accent-hover hover:bg-accent hover:bg-opacity-5':
        linkAppearance === LinkAppearance.SecondaryButton,
    },
    className,
  );

  const iconClassNames = clsx('w-8 h-8 inline-block');

  return (
    <Link to={url} className={classNames}>
      <span>{label}</span>
      {isExternal && (
        <ExternalIcon aria-label={i18n.currentLocale === 'en' ? 'External' : 'Extern'} className={iconClassNames} />
      )}
    </Link>
  );
}
