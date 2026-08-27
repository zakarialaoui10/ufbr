import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from 'node:path'


export default defineConfig({
  plugins: [solid()],
   resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
})
