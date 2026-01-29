import type { ReactNode } from "react";

export declare function createFileBasedRouter(options: {
  pages: Record<
    string,
    () => Promise<{
      default: (props?: any) => ReactNode;
    }>
  >;
  target?: HTMLElement;
}): void;
