import './App.css'
import { createFileBasedRouter } from "ufbr/van";
// import { createSPAFileBasedRouter } from 'ziko/router';

globalThis.pages = import.meta.glob('./pages/**/*.js')
createFileBasedRouter({
  pages,
  target : document.getElementById("app")
})

// createSPAFileBasedRouter({
//   pages,
//   target : document.getElementById("app"),
//   renderer : async (target, component, props ) => {
//     target.append(await component(props))
//   }
// })
