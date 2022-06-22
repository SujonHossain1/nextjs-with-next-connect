import { object, string } from 'yup';

export const personValidator = object({
    name: string().required().min(2),
    email: string().required().email(),
    personalWebsite: string().optional().url(),
    password: string().required().min(6).max(18),
    avatar: string().optional().url(),
});
