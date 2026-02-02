// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { createFileBasedRouter } from 'ufbr/react'

globalThis.pages = import.meta.glob('./pages/**/*.jsx')
createFileBasedRouter({
  pages,
  target : document.getElementById("root")
})
