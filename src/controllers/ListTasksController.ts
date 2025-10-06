import { Request, Response } from "express";
import { ListTasksUseCase } from "../useCases/ListTasksUseCase";

export class ListTasksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listTasksUseCase = new ListTasksUseCase();
        const tasks = await listTasksUseCase.execute();
        return response.status(200).json(tasks);
    }
}