import van from "vanjs-core";
import Delay from "@components/Delay";

const { p } = van.tags;

export default function Page({ delay = 1000 } = {}) {
  return Delay({
    delay,
    fallback: p("Loading..."),
    children: p(() => `This appears after ${delay} ms.`),
  });
}