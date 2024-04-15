import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { ComponentProps } from "react";

export type ImageProps = ComponentProps<'img'> & {
  alt: string;
  src: string;
  dark?: string;
};

export function Image({ alt, src, dark, ...props }: ImageProps) {
  return (
    <ThemedImage
      alt={alt}
      sources={{
        light: useBaseUrl(src),
        dark: useBaseUrl(dark ?? src),
      }}
      {...props}
    />
  );
}
