import { prismaClient } from "../database/prismaClient";

export class GetTaskUseCase {
    async execute(id: string) {
        const task = await prismaClient.task.findUnique({ where: { id } });
        if (!task) {
            throw new Error("Task not found.");
        }
        return task;
    }
}