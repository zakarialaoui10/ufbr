import { createSignal, onCleanup } from "solid-js";

export default function Delay(props) {
  const [ready, setReady] = createSignal(props.delay === 0);

  if (props.delay > 0) {
    const timer = setTimeout(() => setReady(true), props.delay);
    onCleanup(() => clearTimeout(timer));
  }

  return ready() ? props.children : props.fallback;
}