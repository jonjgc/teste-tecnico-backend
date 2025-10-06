import { prismaClient } from "../database/prismaClient";

export class DeleteTaskUseCase {
    async execute(id: string) {
        const task = await prismaClient.task.findUnique({ where: { id }});
        if (!task) {
            throw new Error("Task not found.");
        }
        await prismaClient.task.delete({ where: { id } });
    }
}