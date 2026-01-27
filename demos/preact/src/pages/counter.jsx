import { useState } from 'preact/hooks'

export default function App() {
  const [count, setCount] = useState(0)

  return (
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
  )
}
