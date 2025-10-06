import { Request, Response, NextFunction } from 'express';
import { ZodError, Schema } from 'zod';

export const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query,
        });
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues.map(issue => ({
                path: issue.path,
                message: issue.message,
            })));
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
};