import { createSPAFileBasedRouter } from "ziko/router";
import { asyncDomify } from "zikofy/preact";

export const createFileBasedRouter = ({
    pages, 
    target,
}) => createSPAFileBasedRouter(
    {
        pages,
        target,
        extensions : ['js', 'ts', 'jsx', 'tsx'],
        domifier : asyncDomify  
    }
) 