import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../useCases/DeleteTaskUseCase";

export class DeleteTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteTaskUseCase = new DeleteTaskUseCase();
        try {
            await deleteTaskUseCase.execute(id);
            return response.status(204).send();
        } catch (error: any) {
            return response.status(404).json({ error: error.message });
        }
    }
}