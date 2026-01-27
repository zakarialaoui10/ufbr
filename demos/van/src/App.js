import './App.css'
import { createFileBasedRouter } from "ufbr/van";

globalThis.pages = import.meta.glob('./pages/**/*.js')
createFileBasedRouter({
  pages,
  target : document.getElementById("app")
})

