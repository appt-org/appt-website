import BrowserOnly from '@docusaurus/BrowserOnly';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type { Props } from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import { ChevronIcon } from '@site/src/icons';
import clsx from 'clsx';

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  ...props
}: Props): JSX.Element {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const { search, hash } = useLocation();

  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale]!.label;

  const navbarLabelClass = 'w-full flex justify-between items-center text-body';
  const chevronClass = clsx('w-8 h-8 ml-8 chevron transition-transform text-body');

  const navbarItemClasses = clsx('bg-onsurface', props.className);

  return (
    <BrowserOnly>
      {() => {
        const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
          // preserve ?search#hash suffix on locale switches
          const to = `${window.location.origin}/${locale}${search}${hash}${queryString}`;
          return {
            label: localeConfigs[locale]!.label,
            lang: localeConfigs[locale]!.htmlLang,
            to,
            target: '_self',
            autoAddBaseUrl: false,
            className:
              // eslint-disable-next-line no-nested-ternary
              locale === currentLocale
                ? // Similar idea as DefaultNavbarItem: select the right Infima active
                  // class name. This cannot be substituted with isActive, because the
                  // target URLs contain `pathname://` and therefore are not NavLinks!
                  'dropdown__link--active'
                : '',
          };
        });

        const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

        return (
          <DropdownNavbarItem
            {...props}
            className={navbarItemClasses}
            mobile={mobile}
            label={
              <span className={navbarLabelClass}>
                <span>{dropdownLabel}</span>
                <ChevronIcon className={chevronClass} />
              </span>
            }
            items={items}
          />
        );
      }}
    </BrowserOnly>
  );
}
