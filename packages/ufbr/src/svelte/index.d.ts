import type { SvelteComponent } from "svelte";

export declare function createFileBasedRouter(options: {
  pages: Record<
    string,
    () => Promise<{
      default: typeof SvelteComponent;
    }>
  >;
  target?: HTMLElement;
}): void;
