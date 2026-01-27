import van from "vanjs-core";

export default function App({start, step}){
  const { button, div, h2, br } = van.tags;
  start = +start;
  step = +step 
  const counter = van.state(start);
  return (
    div(
        h2({}, `Counter (start: ${start}, step: ${step})`),
        button({ onclick: () => counter.val += step }, "Counter: ", counter),
        br(),
        div("Try changing the start and step values from the URL")
    )
  );
};

