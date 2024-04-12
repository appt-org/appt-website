import Link, { NavLinkProps } from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ExternalIcon } from "@site/src/icons";

import clsx from "clsx";
export type CustomLinkProps = {
  url: string;
  label: string;
  external?: boolean;
  active?: boolean;
} & NavLinkProps;

export function CustomLink({
  label,
  url,
  external = false,
  active = false,
}: CustomLinkProps) {
  const { i18n } = useDocusaurusContext();

  const classNames = clsx(
    "transition ease-out-quint duration-200 items-center self-end inline text-accent hover:underline",
    {
      "text-body underline": active,
    }
  );

  const iconClassNames = clsx("w-8 h-8 inline-block");

  return (
    <Link to={url} className={classNames}>
      {label}
      {external && (
        <ExternalIcon
          aria-label={i18n.currentLocale === "nl" ? "Extern" : "External"}
          className={iconClassNames}
        />
      )}
    </Link>
  );
}
