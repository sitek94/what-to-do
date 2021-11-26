<script>
  export let text;
  export let disabled = false;
  export let onClick;
</script>

<button class:disabled on:click={onClick}>
  {text}
</button>

<style>
  button {
    width: 290px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    color: var(--text-color);
    background: var(--secondary-color);
    margin: 0;
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
    border: 0;
  }

  .disabled {
    opacity: 0.5;
  }
</style>
