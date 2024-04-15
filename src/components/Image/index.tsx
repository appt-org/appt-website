import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export type ImageProps = {
  alt: string;
  src: string;
  dark?: string;
};

export function Image({ alt, src, dark }: ImageProps) {
  return (
    <ThemedImage
      alt={alt}
      sources={{
        light: useBaseUrl(src),
        dark: useBaseUrl(dark ?? src),
      }}
    />
  );
}
