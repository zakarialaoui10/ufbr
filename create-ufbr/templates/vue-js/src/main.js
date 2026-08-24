import './style.css'

import { createFileBasedRouter } from "ufbr/vue";
const pages = import.meta.glob('./pages/**/*.vue')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)