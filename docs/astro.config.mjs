// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Ufbr',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/zakarialaoui10/ufbr' }],
          sidebar: [
              {
                label : 'Overview',
                slug: 'overview',
              },
              {
                  label: 'Guides',
                  items: [{ autogenerate: { directory: 'guides' } }],
              },
              {
                  label: 'Reference',
                  items: [{ autogenerate: { directory: 'reference' } }],
              },
          ],
      }),
	],

  adapter: netlify(),
});