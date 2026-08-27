import { createSPAFileBasedRouter } from "ziko/router";

export const createFileBasedRouter = ({pages, target, wrapper, extensions = []}) => createSPAFileBasedRouter({
    pages,
    target,
    extensions: [...new Set(['js', 'ts', ...extensions])],
    wrapper,
    renderer : async (target, component, props, wrapper)=>{
      let mounted = await component(props);
      if(mounted instanceof Array){
        if(wrapper) mounted = mounted.map(el => wrapper(el))
        target.append(...mounted)
      }
      if(wrapper) mounted = wrapper(mounted)
      target.append(mounted)
    }
})


