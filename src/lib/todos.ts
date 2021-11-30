import { v4 as uuid } from 'uuid';
import { browser } from '$app/env';

export type Todo = {
  id: string;
  done: boolean;
  active: boolean;
  text: string;
};

export const initialTodos: Todo[] = [
  { id: 'a', done: false, active: true, text: 'Python Course' },
  { id: 'b', done: false, active: true, text: 'Internet History, Technology and Security' },
  { id: 'c', done: false, active: true, text: 'Svelte: Todo App (this one 😄)' },
];

export function createTodo(text: string): Todo {
  return { done: false, active: false, text, id: uuid() };
}

export function getInitialTodos(): Todo[] {
  let todos;

  try {
    todos = JSON.parse(localStorage.getItem('todos'));
    // TODO
    if (!todos) {
      todos = initialTodos;
    }
  } catch {
    todos = initialTodos;
  }

  return todos;
}

export function persistTodos(todos: Todo[]) {
  if (!browser) return;
  localStorage.setItem('todos', JSON.stringify(todos));
}
