import { PropsWithChildren } from "react";

export function Column({ children }: PropsWithChildren) {
  return <div className="flex flex-col">{children}</div>;
}
