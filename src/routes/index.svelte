<script lang="ts">
  import TodoCard from '$lib/TodoCard.svelte';
  import { createTodo, getInitialTodos, persistTodos } from '$lib/todos';
  import type { Todo } from '$lib/todos';
  import { onMount } from 'svelte';

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  let todos: Todo[] = [];
  let newTodoText = '';

  onMount(() => {
    todos = getInitialTodos();
  });

  function toggleTodo(todoId: string) {
    todos = todos.map(t => (t.id === todoId ? { ...t, done: !t.done } : t));
  }

  function addTodo(text: string) {
    todos = [...todos, createTodo(text)];
    newTodoText = '';
  }

  function deleteTodo(todoId: string) {
    todos = todos.filter(t => t.id !== todoId);
  }

  $: {
    if (todos.length) {
      persistTodos(todos);
    }
  }

  $: inactiveTodos = todos.filter(t => !t.active);
  $: activeTodos = todos.filter(t => t.active);

  function dragStart(event, todoId) {
    event.dataTransfer.setData('text/plain', todoId);
  }

  function drop(event, hoveredArea) {
    event.preventDefault();
    const todoId = event.dataTransfer.getData('text/plain');

    todos = todos.map(t => {
      if (t.id === todoId) {
        return { ...t, active: hoveredArea === 'active' };
      }
      return t;
    });

    hoveredArea = null;
  }
</script>

<div class="layout">
  <div class="flex-wrapper" on:drop={e => drop(e, 'active')} ondragover="return false">
    {#each activeTodos as todo}
      <div draggable="true" on:dragstart={e => dragStart(e, todo.id)}>
        <TodoCard done={todo.done} text={todo.text} onClick={() => toggleTodo(todo.id)} />
      </div>
    {/each}
  </div>

  <aside on:drop={e => drop(e, 'inactive')} ondragover="return false">
    <form on:submit|preventDefault={() => addTodo(newTodoText)}>
      <input type="text" placeholder="New todo" bind:value={newTodoText} required />
    </form>
    <ul>
      {#each inactiveTodos as todo}
        <li draggable="true" on:dragstart={e => dragStart(e, todo.id)}>
          {todo.text}
          <button on:click={() => deleteTodo(todo.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
          </button>
        </li>
      {/each}
    </ul>
  </aside>
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  .layout {
    height: 100vh;
    display: flex;
    align-items: flex-start;
  }

  .flex-wrapper {
    flex: 1;
    height: 100%;
    padding: 2rem;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  aside {
    width: 300px;
    height: 100%;
    background: #222;
  }

  input {
    width: 100%;
    color: var(--text-color);
    background: transparent;
    border: 0;
    outline: none;
    padding: 12px 16px;
    border-bottom: 1px solid #333;
  }
  input:hover,
  input:focus {
    border-bottom: 1px solid cornflowerblue;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    height: 48px;
    padding: 12px 16px;
    border-bottom: 1px solid #333;
  }

  li:hover {
    background: #1f1f1f;
  }
  li:hover button {
    visibility: visible;
  }
  li:active {
    border-top: 1px solid #333;
    border-bottom: 2px solid #333;
    outline: none;
  }
  li button {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 0;
    border-radius: 50%;
    color: inherit;
    background: transparent;
    cursor: pointer;
  }
  li button svg {
    width: 16px;
    height: 16px;
    fill: var(--text-color);
  }
  li button:hover {
    background: #333;
  }
</style>
