import type { Component } from "vue";

export declare function createFileBasedRouter(options: {
  pages: Record<
    string,
    () => Promise<{
      default: Component;
    }>
  >;
  target?: HTMLElement;
}): void;
