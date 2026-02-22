# ufbr

**Universal File-Based Router** - A framework-agnostic file-based routing solution for modern web applications.
 
ufbr automatically generates routes from your file structure, eliminating the need for manual route configuration. Perfect for building single-page applications with intuitive file organization.

## Features

- 📁 **File-Based Routing** - Routes automatically generated from your file structure
- ⚡ **Sync & Async Components** - Support for both synchronous and asynchronous component loading
- 🔗 **Nested Routes** - Build hierarchical route structures effortlessly
- 🎯 **Dynamic Routes** - Create parameterized routes with `[param]` syntax
- 🎨 **Framework Agnostic** - Works with Preact, Solid, Ziko, Vue, and more

## Installation

```bash
npm install ufbr
```

## Quick Start

### Basic Usage

```js
import { createFileBasedRouter } from 'ufbr/[FRAMEWORK]'

createFileBasedRouter({
  pages: import.meta.glob('./pages/**/*.[jsx,js]'),
  target: document.body
})
```

## Demos

|Tech|Stackblitz Link|
|-|-|
|Van|[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/zakarialaoui10-ufbr-ygxkiuhm?file=src%2Fpages%2Fcounter.js)|
|Preact|[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/zakarialaoui10-ufbr-uggmzzzd)|
|Solid|[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/zakarialaoui10-ufbr-99dkffay?file=src%2Findex.jsx)|
|Vue||
|Svelte||

## API

### `createFileBasedRouter(options)`

**Options:**
- `pages` (object) - Result of `import.meta.glob()` pattern with all page components
- `target` (Element) - DOM element where the router will render components

### File Structure Example

```
pages/
├── index.[extension]           → /
├── about.[extension]           → /about
├── blog/
│   ├── index.[extension]       → /blog
│   └── [id].[extension]        → /blog/:id
└── user/
    └── [name].[extension]      → /user/:name
```

<!-- ## Route Types

### Static Routes
```
pages/about.[extension]        → /about
pages/contact.[extension]      → /contact
```

### Dynamic Routes
```
pages/[id].[extension]         → /:id
pages/user/[name].[extension]  → /user/:name
```

### Catch-All Routes
```
pages/[...slug].[extension]    → /*
```

### Nested Routes
```
pages/blog/[id].[extension]    → /blog/:id
pages/nested/path/page.[extension] → /nested/path/page
``` -->

## License

MIT
