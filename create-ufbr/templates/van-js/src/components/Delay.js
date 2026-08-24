import van from "vanjs-core";

const { div } = van.tags;

export default function Delay({
  delay = 0,
  fallback = null,
  children,
}) {
  const ready = van.state(delay === 0);

  if (delay > 0) {
    setTimeout(() => {
      ready.val = true;
    }, delay);
  }

  return div(() => (ready.val ? children : fallback));
}