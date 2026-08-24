import { useEffect, useState } from "preact/hooks";

export default function Delay({
  delay = 0,
  fallback = null,
  children,
}) {
  const [ready, setReady] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) {
      setReady(true);
      return;
    }

    const timer = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return ready ? children : fallback;
}