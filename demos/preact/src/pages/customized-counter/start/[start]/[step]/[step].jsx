import { useState } from 'preact/hooks'

export default function App({start, step}) {
  const [count, setCount] = useState(+start)

  return (
      <div class="card">
        <button onClick={() => setCount((count) => count + (+step))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
  )
}
