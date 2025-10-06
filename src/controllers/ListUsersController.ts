import { Request, Response } from "express";
import { ListUsersUseCase } from "../useCases/ListUsersUseCase";

export class ListUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUsersUseCase = new ListUsersUseCase();
        const users = await listUsersUseCase.execute();
        return response.status(200).json(users);
    }
}