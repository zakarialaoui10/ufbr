export declare function createFileBasedRouter(options: {
    pages: Record<
        string,
        () => Promise<{ default: (param?: Record<string, string>) => JSX.Element }>
    >;
    target?: HTMLElement;
}): void;
