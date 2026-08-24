// import './index.css'

import { createFileBasedRouter } from "ufbr/react";
const pages = import.meta.glob('./pages/**/*.jsx')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)