import { Request, Response, Router } from "express";
import { TodosService } from "./services/todos/todos.service";
import { TodoController } from "./controllers/todos/todosControlle";

export const router: Router = Router();

const todosService = new TodosService();
const todosController = new TodoController(todosService);

router
  .route("/ping")
  .get((_req: Request, res: Response) => res.send(`OK @ ${new Date()}`));

router
  .route("/list")
  .get((_req: Request, res: Response) => todosController.get(_req, res));

router
  .route("/save")
  .post((_req: Request, res: Response) => todosController.save(_req, res));

router
  .route("/update/:id")
  .put((_req: Request, res: Response) => todosController.update(_req, res));
