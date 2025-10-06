import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').min(3, 'Name must be at least 3 characters long'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid UUID format for user ID'),
  }),
  body: z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long').optional(),
    email: z.string().email('Invalid email format').optional(),
  }),
});