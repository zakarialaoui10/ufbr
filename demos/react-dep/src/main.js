// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import { createSPAFileBasedRouter } from "ziko/router";
import { createRoot } from 'react-dom/client';
import { createElement } from "react";

export const createFileBasedRouter = ({pages, target}) => createSPAFileBasedRouter({
    pages,
    target,
    extensions : ['jsx', 'tsx', 'js', 'ts'],
    renderer : (target, component, props)=>{
      const root = createRoot(target)

      // console.log(createElement(component, props))
      root.render(
        createElement(component, props)
      )
      // root.render(component(props))
    }
})




globalThis.pages = import.meta.glob('./pages/**/*.jsx')
createFileBasedRouter({
  pages,
  target : document.getElementById("root")
})
