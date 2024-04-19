import { Image } from '@site/src/components';
import type { Props } from '@theme/Footer/Layout';
import clsx from 'clsx';

export default function FooterLayout({ style, links, logo, copyright }: Props): JSX.Element {
  return (
    <footer
      className={clsx('footer p-0', {
        'footer--dark': style === 'dark',
      })}>
      <div className="max-w-xl mx-auto p-8 sm:p-16">
        <Image
          src="img/light/logos/appt-logo-light.svg"
          dark="img/dark/logos/appt-logo-dark.svg"
          alt="Appt logo"
          className="nav-logo"
        />
        {links}
        <div className="pt-8 mt-8 text--center border-t-2 border-onsurface">{copyright}</div>
      </div>
    </footer>
  );
}
