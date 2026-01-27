import van from "vanjs-core";

export default async function App(){
  const { div, h1, img, p, a } = van.tags;
  return h1({}, "Hello world");
};
