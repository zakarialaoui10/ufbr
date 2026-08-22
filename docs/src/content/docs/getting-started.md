---
title: Getting started
description: Learn how to install and set up ufbr in your project using the scaffolding CLI or manual configuration.
---

## Quick Start 

The fastest way to scaffold a new `ufbr` project is using the official setup tool:

```bash
npx create-ufbr 
```

### Interactive Prompts

The CLI guides you through project configuration step-by-step:

```txt
ufbr-cli
|-- Project name: my-app
|-- Select a preset:
|   |-- Ziko
|   |-- React
|   |-- Vue
|   |-- Solid
|   |-- Preact
|   |-- Svelte
|   |-- Van
|-- Language:
|   |-- JavaScript
|   |-- TypeScript
|-- Initialize a new Git repository? (Y/n)
|-- Install dependencies? (Y/n)
```

Once completed, navigate to your project folder and start the dev server 

## Manual Installation

To add `ufbr` to an existing Vite project:

```bash
npm i ufbr
```

### Basic Initialization

In your application entry point (main.js / main.jsx), import the adapter for your framework and pass your pages directory via Vite's import.meta.glob:

```js
// Replace [FRAMEWORK] with your targeted framework (e.g., 'preact', 'solid', 'react', 'ziko')
import { createFileBasedRouter } from 'ufbr/[FRAMEWORK]'

createFileBasedRouter({
  pages: import.meta.glob('./pages/**/*.[jsx,js]'),
  target: document.getElementById('app')
})
```