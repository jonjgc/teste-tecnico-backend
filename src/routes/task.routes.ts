import { Router } from "express";

import { CreateTaskController } from "../controllers/CreateTaskController";
import { ListTasksController } from "../controllers/ListTasksController";
import { GetTaskController } from "../controllers/GetTaskController";
import { UpdateTaskController } from "../controllers/UpdateTaskController";
import { DeleteTaskController } from "../controllers/DeleteTaskController";

const taskRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const getTaskController = new GetTaskController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

taskRoutes.post("/tasks", createTaskController.handle);
taskRoutes.get("/tasks", listTasksController.handle);
taskRoutes.get("/tasks/:id", getTaskController.handle);
taskRoutes.put("/tasks/:id", updateTaskController.handle);
taskRoutes.delete("/tasks/:id", deleteTaskController.handle);

export { taskRoutes };