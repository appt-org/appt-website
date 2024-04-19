import type { Props } from '@theme/Footer/Layout';
import clsx from 'clsx';

export default function FooterLayout({ style, links, logo, copyright }: Props): JSX.Element {
  return (
    <footer
      className={clsx('footer self-end', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid max-w-xl mx-auto p-8 sm:p-16">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom pt-8  text--center border-t-2 border-onsurface ">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
