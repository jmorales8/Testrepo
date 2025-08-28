// Simple in-memory store (resets on server restart)
export type Todo = { id: number; text: string; done: boolean };
const todos: Todo[] = [
    { id: 1, text: "Try the API in Postman", done: false },
];

export function getStore() {
return { todos };
}