<script lang="ts">
  import TodoCard from '$lib/TodoCard.svelte';
  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  let todos = getTodos();

  function getTodos() {
    let initialTodos = [
      { done: false, text: 'Python Course' },
      { done: false, text: 'Internet History, Technology and Security' },
      { done: false, text: 'Svelte: Todo App (this one 😄)' },
    ];

    let todos;
    try {
      todos = JSON.parse(localStorage.getItem('todos'));
      if (!todos) {
        todos = initialTodos;
      }
    } catch {
      todos = initialTodos;
    }
    return todos;
  }

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
    todos = todos;
  }

  function toggleTodo(todo) {
    todo.done = !todo.done;
    saveTodos();
  }
</script>

<div class="flex-wrapper">
  {#each todos as todo}
    <TodoCard done={todo.done} text={todo.text} on:click={() => toggleTodo(todo)} />
  {/each}
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
</style>
