import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export type ImageProps = {
  alt: string;
  lightSrc: string;
  darkSrc?: string;
};

export function Image({ alt, lightSrc, darkSrc }: ImageProps) {
  return (
    <ThemedImage
      alt={alt}
      sources={{
        light: useBaseUrl(lightSrc),
        dark: useBaseUrl(darkSrc ?? lightSrc),
      }}
    />
  );
}
