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
