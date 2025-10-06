import { Request, Response } from "express";
import { GetTaskUseCase } from "../useCases/GetTaskUseCase";

export class GetTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getTaskUseCase = new GetTaskUseCase();
        try {
            const task = await getTaskUseCase.execute(id);
            return response.status(200).json(task);
        } catch (error: any) {
            return response.status(404).json({ error: error.message });
        }
    }
}