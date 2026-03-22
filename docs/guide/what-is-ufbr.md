# What is VitePress?

**Ufbr** is a framework-agnostic file-based routing solution for modern web applications.
It automatically generates routes from your file structure, eliminating the need for manual route configuration.

Built on top of Vite and powered by the ZikoJS router, Ufbr is designed specifically for client-side applications (SPAs).

> Perfect for building fast, scalable single-page applications with intuitive file organization.

## Use cases 

### 🟩 When to use UFBR (SPA-focused)

1. Dashboards & admin panels
    - Analytics dashboards
    - CMS back offices
    - Internal tools

👉 No SEO needed, high interactivity → perfect for UFBR

2. SaaS applications (authenticated areas)
```
/app
/app/projects
/app/settings
```
    - Behind login
    - Requires smooth navigation
    - Persistent state
3. Developer tools & web apps

👉 Need real-time UI updates and fast transitions

4. Component demos & playgrounds

```
/demos/button
/demos/modal
```
Each file = a demo page

5. Internal company tools
    - HR systems
    - Reporting dashboards

6. PWAs & offline-first apps
    - Works without server dependency
    - Fully client-driven navigation

👉 No SEO → SSR is unnecessary
### 🟦 When NOT to use UFBR (use SSR instead)

For comparison, SSR frameworks like Next.js or Astro are better for:

- Marketing websites
- Blogs & articles
- E-commerce product pages
- Public documentation

👉 These require SEO and fast first render


## Table of supports

|Technologie|Demo|
|-|-|
|`React`|-|
|`Preact`|[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/zakarialaoui10-ufbr-uggmzzzd)|
|`Solid`|-|
|`Svelte`|-|
|`Vue`|-|
|`Van`|-|