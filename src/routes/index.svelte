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

  $: {
    if (todos.length) {
      persistTodos(todos);
    }
  }

  $: inactiveTodos = todos.filter(t => !t.active);
  $: activeTodos = todos.filter(t => t.active);
</script>

<div class="layout">
  <div class="flex-wrapper">
    {#each activeTodos as todo}
      <TodoCard done={todo.done} text={todo.text} onClick={() => toggleTodo(todo.id)} />
    {/each}
  </div>
  <aside>
    <form on:submit|preventDefault={() => addTodo(newTodoText)}>
      <input type="text" placeholder="New todo" bind:value={newTodoText} required />
    </form>
    <ul>
      {#each inactiveTodos as todo}
        <li>{todo.text}</li>
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
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  aside {
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
    line-height: 1;
    align-items: center;
    height: 48px;
    padding: 12px 16px;
    border-bottom: 1px solid #333;
  }
  li:hover {
    background: #1f1f1f;
  }
</style>
