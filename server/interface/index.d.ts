import { Types } from 'mongoose';

interface IPerson {
    _id: Types.ObjectId;
    name: string;
    age: number;
    email: string;
    password: string;
    personalWebsite?: string;
    avatar?: string;
}
interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}
