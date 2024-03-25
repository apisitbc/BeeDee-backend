import { Request, Response } from "express";
import { TodosService } from "src/services/todos/todos.service";

export class TodoController {
  constructor(private todosService: TodosService) {}

  get(req: Request, res: Response) {
    try {
      const response = this.todosService.get();

      res.send(response);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  save(req: Request, res: Response) {
    try {
      const { text } = req.body;
      const response = this.todosService.save(text);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { text, completed } = req.body;
      const todo = this.todosService.update({ id, text, completed });
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

}
