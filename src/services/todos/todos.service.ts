import { ITodo } from "src/interface/todos.interface";

export class TodosService {
  private Todo: ITodo[] = [];

  constructor() {}

  get() {
    try {
      return this.Todo;
    } catch (error) {
      throw error;
    }
  }

  save(text: string) {
    try {
      const newTodo: ITodo = {
        id: this.Todo.length + 1,
        text,
        completed: false,
      };
      this.Todo.push(newTodo);
      return this.Todo
    } catch (error) {
      console.error("Error retrieving prices:", error);
      throw error;
    }
  }

  update(todo: ITodo) {
    try {
      const { id, text, completed } = todo;
      const todoIndex = this.Todo.findIndex((todo) => todo.id === id);

      if (todoIndex === -1) throw "Todo not found";

      this.Todo[todoIndex] = { ...this.Todo[todoIndex], text, completed };

      return this.Todo[todoIndex];
    } catch (error) {
      throw error;
    }
  }

}
