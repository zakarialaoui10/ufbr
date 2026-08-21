import './index.css'

import { createFileBasedRouter } from "ufbr/preact";
const pages = import.meta.glob('./pages/**/*.jsx')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)