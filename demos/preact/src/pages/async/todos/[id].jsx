import { useState, useEffect } from 'preact/hooks';

export default function App({id}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const result = await response.json();
        setData(result);
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      } 
      finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <>
      <div>Title: {data.title}</div>
      <div>Completed: {String(data.completed)}</div>
    </>
  )
}
