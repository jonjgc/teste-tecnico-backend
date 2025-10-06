import { Request, Response } from "express";
import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";

export class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, email } = request.body;
        const updateUserUseCase = new UpdateUserUseCase();
        const user = await updateUserUseCase.execute({ id, name, email });
        return response.status(200).json(user);
    }
}