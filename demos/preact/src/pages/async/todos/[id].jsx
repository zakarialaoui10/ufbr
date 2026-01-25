export default async function App({id}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json()
  const {title, completed} = data
  globalThis.completed = completed
  // console.log({id, data})
  return (
    <div>
      <h1>{title}</h1>
      <h2>completed : {String(completed)}</h2>
    </div>
  )
}
