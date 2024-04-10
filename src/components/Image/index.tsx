import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

export type ImageProps = {
  src: string;
  sizes?: string;
};

export function Image({ src, sizes }: ImageProps) {
  return <img src={useBaseUrl(`/img/${src}`)} sizes={sizes} />;
}
