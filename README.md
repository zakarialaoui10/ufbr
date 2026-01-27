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

### File Structure Example

```
pages/
├── index.jsx           → /
├── about.jsx           → /about
├── blog/
│   ├── index.jsx       → /blog
│   └── [id].jsx        → /blog/:id
└── user/
    └── [name].jsx      → /user/:name
```

## Route Types

### Static Routes
```
pages/about.jsx        → /about
pages/contact.jsx      → /contact
```

### Dynamic Routes
```
pages/[id].jsx         → /:id
pages/user/[name].jsx  → /user/:name
```

### Catch-All Routes
```
pages/[...slug].jsx    → /*
```

### Nested Routes
```
pages/blog/[id].jsx    → /blog/:id
pages/nested/path/page.jsx → /nested/path/page
```

## Framework Examples

### Preact
```js
import { createFileBasedRouter } from 'ufbr/preact'

createFileBasedRouter({
  pages: import.meta.glob('./pages/**/*.jsx'),
  target: document.getElementById('app')
})
```


### Van
```js
import { createFileBasedRouter } from 'ufbr/van'

createFileBasedRouter({
  pages: import.meta.glob('./pages/**/*.js'),
  target: document.body
})
```

## API

### `createFileBasedRouter(options)`

**Options:**
- `pages` (object) - Result of `import.meta.glob()` pattern with all page components
- `target` (Element) - DOM element where the router will render components

## Examples

Check out the [demos/](./demos) folder for complete working examples with:
- **Preact** - Full routing example with nested and dynamic routes
- **Van** - Full routing example with nested and dynamic routes
<!-- - **Solid** - Solid.js implementation -->

## License

MIT
