import { PropsWithChildren } from "react";

export function ColumnRow({ children }: PropsWithChildren) {
  return <div className="flex-1">{children}</div>;
}
