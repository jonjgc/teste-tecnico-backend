import { Request, Response } from "express";
import { UpdateTaskUseCase } from "../useCases/UpdateTaskUseCase";

export class UpdateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { title, description, status } = request.body;
        const updateTaskUseCase = new UpdateTaskUseCase();
        const task = await updateTaskUseCase.execute({ id, title, description, status });
        return response.status(200).json(task);
    }
}