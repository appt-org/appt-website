import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { Image, Typography } from '@site/src/components';
import { PropsWithChildren } from 'react';

type PartnerItemProps = {
  src: string;
  darkSrc?: string;
  alt: string;
  url: string;
  className?: string;
};

function PartnerItem({ src, darkSrc, alt, url, className }: PropsWithChildren<PartnerItemProps>) {
  return (
    <li className="flex">
      <Link to={url}>
        <Image src={src} dark={darkSrc} alt={alt} className={className} />
      </Link>
    </li>
  );
}

export default function PartnerColumn() {
  const createdByPartners = [
    {
      src: 'img/light/logos/q42.svg',
      darkSrc: 'img/dark/logos/q42.svg',
      alt: 'Q42 logo',
      url: '/partners/q42',
    },
    {
      src: 'img/light/logos/abra.svg',
      darkSrc: 'img/dark/logos/abra.svg',
      alt: 'Abra logo',
      url: '/partners/abra',
    },
  ];

  const supportedByPartners = [
    {
      src: 'img/light/logos/sidn-fonds.svg',
      darkSrc: 'img/dark/logos/sidn-fonds.svg',
      alt: 'SIDN fonds logo',
      url: 'https://www.sidnfonds.nl/excerpt',
    },
    {
      src: 'img/light/logos/go-fonds.png',
      alt: 'Stichting GO Fonds logo',
      url: 'https://www.gofonds.nl/',
      className: 'dark:bg-body dark:rounded dark:rounded dark:rounded-tr-none h-5 max-w-[6rem] object-contain',
    },
  ];
  return (
    <>
      <div className="space-y-2">
        <Typography tag="p">
          <Translate id="footer.partners.created" />
        </Typography>
        <ul className="flex gap-4" role="list">
          {createdByPartners.map((partner, i) => (
            <PartnerItem key={i} {...partner} className="w-auto h-12 max-w-[6.5rem]" />
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <Typography tag="p">
          <Translate id="footer.partners.supported" />
        </Typography>
        <ul className="flex gap-4" role="list">
          {supportedByPartners.map((partner, i) => (
            <PartnerItem key={i} {...partner} className={`w-auto h-4 max-w-[4.5rem] ${partner.className}`} />
          ))}
        </ul>
      </div>
    </>
  );
}
