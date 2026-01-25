// import { render, h } from 'preact'
// import './index.css'
// import { App } from './app.jsx'

// render(<App />, document.getElementById('app'))

import { createFileBasedRouter } from "ufbr/preact";

// import { asyncDomify } from 'zikofy/preact'


globalThis.pages = import.meta.glob('./pages/**/*.jsx')

globalThis.app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)