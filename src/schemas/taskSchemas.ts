import { z } from 'zod';

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required').min(3, 'Title must be at least 3 characters long'),
    description: z.string().min(1, 'Description is required'),
    userId: z.string().min(1, 'userId is required').uuid('Invalid UUID format for userId'),
  }),
});