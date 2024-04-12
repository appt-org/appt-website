import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export type ImageProps = {
  alt: string;
  lightSrc: string;
  darkSrc?: string;
  className?: string;
};

export function Image({ alt, lightSrc, darkSrc, className = "" }: ImageProps) {
  return (
    <ThemedImage
      alt={alt}
      className={className}
      sources={{
        light: useBaseUrl(lightSrc),
        dark: useBaseUrl(darkSrc ?? lightSrc),
      }}
    />
  );
}
