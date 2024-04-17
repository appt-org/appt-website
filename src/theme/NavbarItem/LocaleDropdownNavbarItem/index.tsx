import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type { Props } from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import useBaseUrl from '@docusaurus/useBaseUrl';
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

  const baseUrl = useBaseUrl('/', { absolute: true });
  const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
    // Leave 'en' out of the URL since it's the default
    const localePrefix = locale === 'en' ? '' : 'nl';

    // preserve ?search#hash suffix on locale switches
    const to = `${baseUrl}${localePrefix}${search}${hash}${queryString}`;
    return {
      label: localeConfigs[locale]!.label,
      lang: localeConfigs[locale]!.htmlLang,
      href: to,
      target: '_self',
      autoAddBaseUrl: false,
      // Hide 'external link' icon
      className: clsx('[&>svg]:hidden', {
        'menu__link--active': locale !== currentLocale && mobile,
        'dropdown__link--active': locale !== currentLocale && !mobile,
      }),
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale]!.label;

  const navbarLabelClass = clsx({ 'flex items-center font-normal': !mobile });
  const chevronClass = clsx({ 'w-8 h-8 ml-8': !mobile, hidden: mobile });

  return (
    <DropdownNavbarItem
      {...props}
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
}
