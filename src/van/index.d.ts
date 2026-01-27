export declare function createFileBasedRouter(options: {
    pages: Record<
        string,
        () => Promise<{ default: (param?: Record<string, string>) => HTMLElement }>
    >;
    target?: HTMLElement;
}): void;
