import { createSPAFileBasedRouter } from "ziko/router";
import { createRoot } from 'react-dom/client';
import { createElement } from "react";

export const renderer = (target, component, props)=>{
  const root = createRoot(target)
  root.render(
    createElement(component, props)
  )
}

export const createFileBasedRouter = ({pages, target}) => createSPAFileBasedRouter({
    pages,
    target,
    extensions : ['jsx', 'tsx', 'js', 'ts'],
    renderer,
})


