<script>
  export let done;
  export let text;
  export let onClick;
</script>

<button class:done on:click={onClick}>
  {text}
</button>

<style>
  button {
    width: 290px;
    height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--text-color);
    background: var(--secondary-color);

    margin: 0;
    border: 0;
    border-radius: 1rem;
    padding: 1rem;

    text-align: center;
    font-size: 2rem;
    cursor: pointer;
  }

  .done {
    opacity: 0.5;
  }
</style>
