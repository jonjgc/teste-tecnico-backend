import { prismaClient } from "../database/prismaClient";

interface IUpdateTaskRequest {
    id: string;
    title?: string;
    description?: string;
    status?: string;
}

export class UpdateTaskUseCase {
    async execute({ id, title, description, status }: IUpdateTaskRequest) {
        const task = await prismaClient.task.update({
            where: { id },
            data: { title, description, status }
        });
        return task;
    }
}