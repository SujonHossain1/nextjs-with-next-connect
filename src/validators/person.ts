import { number, object, string, TypeOf } from 'yup';

export const personValidator = object({
    name: string().required().min(2),
    age: number().required().integer().min(18),
    email: string().optional().email(),
    personalWebsite: string().optional().url(),
});

export type Person = TypeOf<typeof personValidator>;
