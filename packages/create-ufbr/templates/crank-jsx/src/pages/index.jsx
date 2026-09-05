// export default function App() {
//   return (
//     <div>
//       <h1>Hello Crank!</h1>
//       <button onclick={() => alert("Hello!")}>
//         Click me
//       </button>
//     </div>
//   );
// }

export default function *Timer({start = 10} = {}) {
  let seconds = start;
  const interval = setInterval(() => this.refresh(() => seconds++), 1000);

  for ({} of this) {
    yield <div>Seconds: {seconds}</div>;
  }

  clearInterval(interval);
}
