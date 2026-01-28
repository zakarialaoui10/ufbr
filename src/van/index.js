import { createSPAFileBasedRouter } from "ziko/router";

export const createFileBasedRouter = ({pages, target}) => createSPAFileBasedRouter({
    pages,
    target,
    extensions: ['js', 'ts'],
    renderer : async (target, component, props ) => {
      target.append(await component(props))
    }
})


