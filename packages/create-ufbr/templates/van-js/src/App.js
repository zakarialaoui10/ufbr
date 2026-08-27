import './index.css'

import { createFileBasedRouter } from "ufbr/van";
const pages = import.meta.glob('./pages/**/*.js')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)