import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body;
        const createUserUseCase = new CreateUserUseCase();

        try {
            const user = await createUserUseCase.execute({ name, email });
            return response.status(201).json(user);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}