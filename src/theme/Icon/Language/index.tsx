import type { Props } from '@theme/Icon/Language';

// Keep the original props for compatibility with the existing theme, but do not return an actual icon we don't want to show an icon in the language switch
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function IconLanguage({ width, height, ...props }: Props): JSX.Element {
  return <></>;
}
