import Counter from "@components/Counter.jsx"

export default function App({ slug }) {
    const [start, step = 1] = slug.split('/').map(Number)
    return <Counter start={start} step={step} />
}