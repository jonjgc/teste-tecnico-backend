import { Request, Response } from "express";
import { GetUserUseCase } from "../useCases/GetUserUseCase";

export class GetUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getUserUseCase = new GetUserUseCase();
        try {
            const user = await getUserUseCase.execute(id);
            return response.status(200).json(user);
        } catch (error: any) {
            return response.status(404).json({ error: error.message });
        }
    }
}