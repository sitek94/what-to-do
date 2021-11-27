<script lang="ts">
  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  let todos = getTodos();
  let isAddingTodo = false;

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

  let newTodoText = '';

  function addTodo() {
    todos.push({ done: false, text: newTodoText });
    saveTodos();
    cancelAddingTodo();
  }

  function enableAddingTodo() {
    isAddingTodo = true;
  }

  function cancelAddingTodo() {
    isAddingTodo = false;
    newTodoText = '';
  }
</script>

<div class="flex-wrapper">
  {#each todos as todo}
    <button class="card" class:done={todo.done} on:click={() => toggleTodo(todo)}>
      {todo.text}
    </button>
  {/each}
  {#if isAddingTodo}
    <form class="card add-todo-card" on:submit|preventDefault={addTodo}>
      <div class="card-body">
        <textarea bind:value={newTodoText} required />
      </div>
      <div class="card-actions">
        <button type="submit">Add</button>
        <button type="button" on:click={cancelAddingTodo}>Cancel</button>
      </div>
    </form>
  {:else}
    <button class="card placeholder" on:click={enableAddingTodo}>+</button>
  {/if}
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
  .card {
    cursor: pointer;
    width: 290px;
    height: 180px;
    display: flex;
    flex-direction: column;
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

  .card-body {
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .card-actions {
    width: 100%;
    display: flex;
  }
  .card-actions > button {
    flex: 1;
    padding: 0.5rem;
    border: 0;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
    color: inherit;
    background: transparent;
  }
  .card-actions > button:hover {
    background: #4b4b4b;
  }

  .add-todo-card {
    overflow: hidden;
    padding: 0;
    border: 2px dashed var(--text-color);

    background: transparent;
  }

  textarea {
    outline: none;
    resize: none;
    text-align: center;
    border: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    color: inherit;
    background: transparent;
    font-size: inherit;
    font-family: inherit;
    padding: 1rem;
    border-bottom: 2px solid var(--text-color);
  }
  textarea:focus {
    border-color: cornflowerblue;
    overflow: hidden;
  }
</style>
