// import { ParentProps } from "solid-js";

import './layout.css'

export function Layout(props) {
  return (
    <div class="layout">
      <aside class="sidebar">
        <nav>
          <ul>
            {props.sidebar?.map(({ label, href }) => (
              <li>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main class="main"> {props.children} </main>
    </div>
  );
}
