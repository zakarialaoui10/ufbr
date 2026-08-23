import './style.css'

import { createFileBasedRouter } from "ufbr/svelte";
const pages = import.meta.glob('./pages/**/*.svelte')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)