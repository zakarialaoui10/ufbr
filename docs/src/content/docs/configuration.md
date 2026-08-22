---
title: Configuration Reference
description: Complete reference for createFileBasedRouter options, Vite glob settings, and base path configurations in ufbr.
---

`ufbr` is configured by passing an options object to `createFileBasedRouter`.

```ts
createFileBasedRouter(options)
```

## Configuration Options

|Option|Type|
|-|-|
|`pages`|`Record<string, () => Promise<any>>`|
|`target`|`HTMLElement \| Element`|