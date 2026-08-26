<script>
  export let start = 0;
  export let step = 1;

  let count = start;

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      width: "fit-content",
    },
    value: {
      minWidth: "50px",
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "600",
    },
    button: {
      width: "36px",
      height: "36px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "20px",
    },
  };
</script>

<div style={Object.entries(styles.container).map(([key, value]) => `${key}:${value}`).join(";")}>
  <button
    style={Object.entries(styles.button).map(([key, value]) => `${key}:${value}`).join(";")}
    on:click={() => count -= step}
  >
    −
  </button>

  <span style={Object.entries(styles.value).map(([key, value]) => `${key}:${value}`).join(";")}>
    {count}
  </span>

  <button
    style={Object.entries(styles.button).map(([key, value]) => `${key}:${value}`).join(";")}
    on:click={() => count += step}
  >
    +
  </button>
</div>