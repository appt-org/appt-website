import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import { ComponentProps } from 'react';

export type ImageProps = ComponentProps<'img'> & {
  src: string;
  dark?: string;
  alt: string;
};

// Type for components which display an optional image
// Alt is only required if image is provided
export type ImagePropsOptional =
| { image: string; imageDark?: string; alt: string }
| { image: undefined; imageDark: undefined; alt: undefined };

export function Image({ alt, src, dark, ...props }: ImageProps) {
  return (
    <ThemedImage
      sources={{
        light: useBaseUrl(src),
        dark: useBaseUrl(dark ?? src),
      }}
      alt={alt}
      {...props}
    />
  );
}
