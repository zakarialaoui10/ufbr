import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { createSPAFileBasedRouter } from 'ziko/router'

globalThis.pages = import.meta.glob('./pages/**/*.svelte')
createSPAFileBasedRouter({
  pages : import.meta.glob('./pages/**/*.svelte'),
  target: document.getElementById('app'),
  extensions : ['svelte'],
  renderer : (target, component, props)=>{
    // mount(App, target)
    mount(component, {
      target,
      props
    })
    console.log({target, component, props})
  }

})
// const app = mount(App, {
//   target: document.getElementById('app'),
// })

// export default app
