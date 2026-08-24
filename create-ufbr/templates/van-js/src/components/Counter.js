import van from "vanjs-core";

const { div, span, button } = van.tags;

export default function Counter({ start = 0, step = 1 }) {
  const count = van.state(start);

  const styles = {
    container: `
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      width: fit-content;
    `,
    value: `
      min-width: 50px;
      text-align: center;
      font-size: 24px;
      font-weight: 600;
    `,
    button: `
      width: 36px;
      height: 36px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 20px;
    `,
  };

  return div(
    { style: styles.container },

    button(
      {
        style: styles.button,
        onclick: () => (count.val -= step),
      },
      "−"
    ),

    span(
      {
        style: styles.value,
      },
      () => count.val
    ),

    button(
      {
        style: styles.button,
        onclick: () => (count.val += step),
      },
      "+"
    )
  );
}