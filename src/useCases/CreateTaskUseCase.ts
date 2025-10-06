import { prismaClient } from "../database/prismaClient";

interface ICreateTaskRequest {
    title: string;
    description: string;
    userId: string;
}

export class CreateTaskUseCase {
    async execute({ title, description, userId }: ICreateTaskRequest) {
        const user = await prismaClient.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            throw new Error("User not found.");
        }

        const task = await prismaClient.task.create({
            data: {
                title,
                description,
                userId
            }
        });

        return task;
    }
}