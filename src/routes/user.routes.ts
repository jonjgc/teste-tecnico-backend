import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";
import { GetUserController } from "../controllers/GetUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { validate } from "../middlewares/validationMiddleware";
import { createUserSchema, updateUserSchema } from "../schemas/userSchemas";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const getUserController = new GetUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


userRoutes.post("/users", validate(createUserSchema), createUserController.handle);
userRoutes.get("/users", listUsersController.handle);
userRoutes.get("/users/:id", getUserController.handle);
userRoutes.put("/users/:id", validate(updateUserSchema), updateUserController.handle);
userRoutes.delete("/users/:id", deleteUserController.handle);

export { userRoutes };