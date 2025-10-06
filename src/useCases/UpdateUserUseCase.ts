import { prismaClient } from "../database/prismaClient";

interface IUpdateUserRequest {
    id: string;
    name?: string;
    email?: string;
}

export class UpdateUserUseCase {
    async execute({ id, name, email }: IUpdateUserRequest) {
        const user = await prismaClient.user.update({
            where: { id },
            data: { name, email }
        });
        return user;
    }
}