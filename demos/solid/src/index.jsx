import './index.css'

import { createFileBasedRouter } from "ufbr/solid";

globalThis.pages = import.meta.glob('./pages/**/*.jsx')

globalThis.app = createFileBasedRouter(
    {
        pages,
        target : document.getElementById('root'),
    }
)