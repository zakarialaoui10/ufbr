## Overview
[**ufbr**](https://github.com/zakarialaoui10/ufbr) is an Universal File Based Router with `Solidjs` supports

## Features 
- File Based Routing 
- Static and Dynamic Routes
- Dyamic routes
- Supports Fragement components

## Demo 

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/zakarialaoui10-ufbr-99dkffay?file=src%2Findex.jsx)

## Usage

```js
// .src/main.jsx
import { createFileBasedRouter } from "ufbr/preact";
createFileBasedRouter(
    {
        pages : import.meta.glob('./pages/**/*.jsx'),
        target : document.getElementById('app'),
    }
)
```
```jsx
import { createResource, Suspense } from "solid-js";
import { ErrorBoundary } from "solid-js/web";

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const fetchWithDelay = async (url, waitMs) => {
  await sleep(waitMs);
  const r = await fetch(url);
  return r.json();
};

const fetchStar = async (repo) => {
  const data = await fetchWithDelay(
    `https://api.github.com/repos/solidjs/${repo}`,
    500
  );
  return data.stargazers_count;
};

export default function App({repo}) {
  const [stars] = createResource(
    () => repo,
    fetchStar
  );

  return (
    <h2>
      GitHub Stars:{" "}
      <ErrorBoundary fallback={() => "🙀 Request failed."}>
        <Suspense fallback={"🌀 Loading..."}>
          ⭐️ {stars()}!
        </Suspense>
      </ErrorBoundary>
    </h2>
  );
}

```

This setup supports the following routes:
- /repos/solid
- /repos/templates
- /repos/solid-start
- ...

## Best practices

Use **ufbr** with Solid when you need a client-side, file-based router and SEO is not a priority (for example, dashboards or internal tools).
For SSR and SEO-focused, file-based routing, consider using **SolidStart**, **Astro**, or similar frameworks.


## Show your supports 

If you appreciate the idea, kindly show your support by starring the libraries that make it possible :

- **https://github.com/zakarialaoui10/ufbr**

