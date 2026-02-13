import './App.css'
import { createFileBasedRouter } from "ufbr/van";
// import { createSPAFileBasedRouter } from 'ziko/router';
import van from 'vanjs-core'

globalThis.pages = import.meta.glob('./pages/**/*.js')
createFileBasedRouter({
  pages,
  wrapper : (component) => van.tags.strong(component),
  target : document.getElementById("app")
})

// createSPAFileBasedRouter({
//   pages,
//   target : document.getElementById("app"),
//   renderer : async (target, component, props ) => {
//     target.append(await component(props))
//   }
// })
