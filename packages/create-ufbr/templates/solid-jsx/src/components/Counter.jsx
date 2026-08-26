import { createSignal } from "solid-js";

export default function Counter(props) {
  const [count, setCount] = createSignal(props.start ?? 0);
  const step = () => props.step ?? 1;

  const styles = {
    container: {
      display: "flex",
      "align-items": "center",
      gap: "12px",
      padding: "12px",
      border: "1px solid #ddd",
      "border-radius": "8px",
      width: "fit-content",
    },
    value: {
      "min-width": "50px",
      "text-align": "center",
      "font-size": "24px",
      "font-weight": "600",
    },
    button: {
      width: "36px",
      height: "36px",
      border: "none",
      "border-radius": "6px",
      cursor: "pointer",
      "font-size": "20px",
    },
  };

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={() => setCount(count() - step())}
      >
        −
      </button>

      <span style={styles.value}>{count()}</span>

      <button
        style={styles.button}
        onClick={() => setCount(count() + step())}
      >
        +
      </button>
    </div>
  );
}