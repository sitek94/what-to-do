<script lang="ts">
  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  let todos = getTodos();

  function getTodos() {
    let initialTodos = [
      { done: false, text: 'Python Course' },
      { done: false, text: 'Internet History, Technology and Security' },
      { done: false, text: 'Svelte: Todo App (this one 😄)' },
      { done: false, text: 'Timeline Improvements' },
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
  function addTodo() {
    todos.push({ done: false, text: '' });
    saveTodos();
  }
</script>

<div class="flex-wrapper">
  {#each todos as todo}
    <button class:done={todo.done} on:click={() => toggleTodo(todo)}>
      {todo.text}
    </button>
  {/each}
  <button class="placeholder" on:click={addTodo}>+</button>
</div>

<style>
  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  button {
    cursor: pointer;
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
  .done {
    opacity: 0.5;
  }
  .placeholder {
    font-size: 3rem;
    background: transparent;
    border: 2px dashed var(--text-color);
  }
</style>
