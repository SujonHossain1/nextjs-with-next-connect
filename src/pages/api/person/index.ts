import { NextApiRequest, NextApiResponse } from 'next';
import handler from 'server/middleware/handler';
import connectDB from 'server/middleware/mongodb';
import validate from 'server/middleware/validate';
import Person from 'server/models/Person';
import { personValidator } from 'server/validators/person';

const personHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;
    if (method === 'POST') {
        try {
            console.log({ body });
            const person = await Person.create(body);
            res.status(200).json({
                success: true,
                data: person,
                message: 'ok',
            });
        } catch (error) {
            res.status(400).json({
                error,
            });
        }
    } else {
        res.json({
            not: 'accept',
        });
    }
};

// const createPerson = async (req: NextApiRequest, res: NextApiResponse) => {
//     res.status(200).json({
//         message: 'ok',
//     });
// };

const person = handler.post(async (req, res) => {
    res.status(200).json({
        body: req.body,
        method: req.method,
    });
});

export default connectDB(validate(personValidator, person));
