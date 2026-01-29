import { createSPAFileBasedRouter } from "ziko/router";
import { mount } from 'svelte'

export const createFileBasedRouter = ({pages, target}) => createSPAFileBasedRouter({
    pages,
    target,
    extensions : ['svelte'],
    renderer : (target, component, props)=>{
      mount(component, {
        target,
        props
      })
    console.log({target, component, props})
  }
})


