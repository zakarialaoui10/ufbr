export default function App() {
  return (
    <main>
      <section>
        <h1>About UFBR</h1>
        <p>
          UFBR is a universal file-based router designed to bring simple,
          filesystem-driven routing to modern JavaScript applications.
        </p>
        <p>
          Define your routes through your project structure and let UFBR
          handle route discovery, navigation, and parameterized routes.
        </p>
      </section>

      <section>
        <h2>File-based routing</h2>
        <p>
          Your files become your routes. Instead of maintaining a large
          routing configuration, organize your application around a directory
          structure that naturally represents your URLs.
        </p>

        <pre>
          <code>{`pages/
├── index.js
├── about.js
├── blog/
│   ├── index.js
│   └── [slug].js
└── users/
    └── [id].js`}</code>
        </pre>
      </section>

      <section>
        <h2>Universal by design</h2>
        <p>
          UFBR is designed to work across different JavaScript environments
          and application architectures, making it suitable for SPAs, SSR
          applications, and other file-based projects.
        </p>
      </section>

      <section>
        <h2>Dynamic routes</h2>
        <p>
          Create dynamic segments directly in your file structure. A file such
          as <code>[id].js</code> can represent a route like
          <code>/users/42</code>.
        </p>
      </section>

      <section>
        <h2>Why UFBR?</h2>
        <ul>
          <li>Simple filesystem-based routing</li>
          <li>Dynamic and nested routes</li>
          <li>Minimal configuration</li>
          <li>Designed for multiple JavaScript environments</li>
          <li>Easy to understand and maintain</li>
        </ul>
      </section>

      <section>
        <h2>Get started</h2>
        <p>
          Create a UFBR project and start building your application with a
          routing structure that follows your filesystem.
        </p>

        <pre>
          <code>npm create ufbr@latest</code>
        </pre>
      </section>

      <section>
        <h2>Open source</h2>
        <p>
          UFBR is open source and built to be extended and integrated into
          different JavaScript projects.
        </p>
      </section>
    </main>
  )
}