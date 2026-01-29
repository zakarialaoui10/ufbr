import { createSPAFileBasedRouter } from "ziko/router";
import { createRoot } from 'react-dom/client'

export const createFileBasedRouter = ({pages, target}) => createSPAFileBasedRouter({
    pages,
    target,
    extensions : ['jsx', 'tsx', 'js', 'ts'],
    renderer : (target, component, props)=>{
      const root = createRoot(target)
      root.render(component(props))
    }
})


