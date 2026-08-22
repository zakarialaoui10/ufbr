---
title: Preact Adapter
description: Integrate ufbr with Preact applications for lightweight file-based routing.
---

# Preact Adapter

The `ufbr/preact` module provides thin integration layer for Preact, enabling automated file-based routing with support for dynamic parameters and component resolution.

## Quick Example

```jsx
// main.jsx
import { createFileBasedRouter } from "ufbr/preact"

const pages = import.meta.glob('./pages/**/*.jsx')

const app = createFileBasedRouter({
  pages,
  target: document.getElementById('app')
})
```

## Directory Setup

```
my-preact-app/
|-- src/
|   |-- pages/
|   |   |-- index.jsx           --> /
|   |   |-- about.jsx           --> /about
|   |   `-- user/
|   |       `-- [id].jsx        --> /user/:id
|   `-- main.jsx
|-- package.json
|-- vite.config.js
```