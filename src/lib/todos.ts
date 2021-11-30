import { v4 as uuid } from 'uuid';

type Todo = {
  id: string;
  done: boolean;
  text: string;
};

export const initialTodos: Todo[] = [
  { id: 'a', done: false, text: 'Python Course' },
  { id: 'b', done: false, text: 'Internet History, Technology and Security' },
  { id: 'c', done: false, text: 'Svelte: Todo App (this one 😄)' },
];

export function createTodo(text: string): Todo {
  return { done: false, text, id: uuid() };
}

export function getInitialTodos(): Todo[] {
  let todos: Todo[] = [];

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

export function persistTodos(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
