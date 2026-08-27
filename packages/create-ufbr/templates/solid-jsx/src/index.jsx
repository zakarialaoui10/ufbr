import './index.css'

import { createFileBasedRouter } from "ufbr/solid";
const pages = import.meta.glob('./pages/**/*.jsx')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)