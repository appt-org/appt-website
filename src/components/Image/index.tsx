import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export type ImageProps = {
  alt: string;
  src: string;
  dark?: string;
  className?: string;
};

export function Image({ alt, src, dark, className = "" }: ImageProps) {
  return (
    <ThemedImage
      alt={alt}
      className={className}
      sources={{
        light: useBaseUrl(src),
        dark: useBaseUrl(dark ?? src),
      }}
    />
  );
}
