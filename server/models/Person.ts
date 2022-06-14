import { model, models, Schema } from 'mongoose';
import { IPerson } from 'server/interface';

const personSchema = new Schema<IPerson>(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            min: 18,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        personalWebsite: String,
        avatar: String,
    },
    { timestamps: true }
);

const Person = models.Person || model<IPerson>('Person', personSchema);
export default Person;
