import './style.css'
import { createFileBasedRouter } from 'ufbr/vue'

globalThis.pages = import.meta.glob('./pages/**/*.vue')
createFileBasedRouter({
  pages,
  target : document.getElementById("app")
})
