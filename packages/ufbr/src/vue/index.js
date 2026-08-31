import { createSPAFileBasedRouter } from "ziko/router";
import { createApp } from 'vue'

export const renderer = (target, component, props)=>{
      const app = createApp(component, props)
      app.mount(target)
    }

export const createFileBasedRouter = ({pages, target}) => createSPAFileBasedRouter({
    pages,
    target,
    extensions : ['vue'],
    renderer,
})


