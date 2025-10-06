import { Request, Response } from "express";
import { DeleteUserUseCase } from "../useCases/DeleteUserUseCase";

export class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteUserUseCase = new DeleteUserUseCase();
        try {
            await deleteUserUseCase.execute(id);
            return response.status(204).send();
        } catch (error: any) {
            return response.status(404).json({ error: error.message });
        }
    }
}