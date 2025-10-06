import { prismaClient } from "../database/prismaClient";

export class DeleteUserUseCase {
    async execute(id: string) {
        const user = await prismaClient.user.findUnique({ where: { id }});
        if (!user) {
            throw new Error("User not found.");
        }
        await prismaClient.user.delete({
            where: { id }
        });
    }
}