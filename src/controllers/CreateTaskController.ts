import { Request, Response } from "express";
import { CreateTaskUseCase } from "../useCases/CreateTaskUseCase";

export class CreateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description, userId } = request.body;
        const createTaskUseCase = new CreateTaskUseCase();

        try {
            const task = await createTaskUseCase.execute({ title, description, userId });
            return response.status(201).json(task);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}