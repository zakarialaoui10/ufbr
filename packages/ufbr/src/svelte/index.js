import { createSPAFileBasedRouter } from "ziko/router";
import { mount } from 'svelte'

export const renderer = (target, component, props)=>{
      mount(component, {
        target,
        props
      })
  }

export const createFileBasedRouter = ({pages, target}) => createSPAFileBasedRouter({
    pages,
    target,
    extensions : ['svelte'],
    renderer 
})


