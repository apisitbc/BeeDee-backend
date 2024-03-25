import { Request, Response } from "express";
import { TodosService } from "src/services/todos/todos.service";
export declare class TodoController {
    private todosService;
    constructor(todosService: TodosService);
    get(req: Request, res: Response): void;
    save(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
}
//# sourceMappingURL=todosControlle.d.ts.map