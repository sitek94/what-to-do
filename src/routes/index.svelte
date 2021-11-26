<script lang="ts">
  import Card from '$lib/Card.svelte';

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  let todos = [
    { done: false, text: 'Python Course' },
    { done: false, text: 'Internet History, Technology and Security' },
    { done: false, text: 'Svelte: Todo App (this one 😄)' },
  ];
</script>

<div class="cards">
  {#each todos as todo}
    <Card text={todo.text} disabled={todo.done} onClick={() => (todo.done = !todo.done)} />
  {/each}
</div>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
</style>
