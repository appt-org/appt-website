import Link from '@docusaurus/Link';
import type { Props } from '@theme/MDXComponents/A';

export default function MDXA(props: Props): JSX.Element {
  return <Link className="underline text-accent hover:no-underline" {...props} />;
}
