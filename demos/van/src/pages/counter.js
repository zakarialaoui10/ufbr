import van from "vanjs-core";

export default function App(){
  const { button } = van.tags;
  const counter = van.state(0);
  return (
    button({ onclick: () => ++counter.val }, "Counter: ", counter)
  );
};

