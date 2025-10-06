import { prismaClient } from "../database/prismaClient";

interface ICreateUserRequest {
    name: string;
    email: string;
}

export class CreateUserUseCase {
    async execute({ name, email }: ICreateUserRequest) {
        
        const userExists = await prismaClient.user.findUnique({
            where: { email }
        });

        if (userExists) {
            throw new Error("User with this email already exists.");
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                email
            }
        });

        return user;
    }
}