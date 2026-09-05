// import './index.css'

import { createFileBasedRouter } from "ufbr/crank";

// import { createSPAFileBasedRouter } from "ziko/router";
// import { renderer as crankRenderer } from "@b9g/crank/dom";

// export const renderer = (target, Component, props) => {
//   crankRenderer.render(<Component {...props}/>, target);
// };

// export const createFileBasedRouter = ({ pages, target }) =>
//   createSPAFileBasedRouter({
//     pages,
//     target,
//     extensions: ["jsx", "tsx", "js", "ts"],
//     renderer,
//   });

const pages = import.meta.glob('./pages/**/*.jsx')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)
// import { renderer } from "@b9g/crank/dom";

// function App() {
//   return (
//     <div>
//       <h1>Hello Crank!</h1>
//       <button onclick={() => alert("Hello!")}>
//         Click me
//       </button>
//     </div>
//   );
// }

// renderer.render(<App />, document.getElementById("app"));