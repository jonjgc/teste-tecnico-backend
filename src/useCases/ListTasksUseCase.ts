import { prismaClient } from "../database/prismaClient";

export class ListTasksUseCase {
    async execute() {
        const tasks = await prismaClient.task.findMany({
            include: {
                user: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return tasks;
    }
}