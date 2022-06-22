import handler from 'server/middleware/handler';
import connectDB from 'server/middleware/mongodb';
import validate from 'server/middleware/validate';
import { personValidator } from 'server/validators/person';

const person = handler.post(async (req, res) => {
    res.status(200).json({
        body: req.body,
        method: req.method,
    });
});

export default connectDB(validate(personValidator, person));
