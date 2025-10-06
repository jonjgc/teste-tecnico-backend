import { prismaClient } from "../database/prismaClient";

export class ListUsersUseCase {
    async execute() {
        const users = await prismaClient.user.findMany();
        return users;
    }
}