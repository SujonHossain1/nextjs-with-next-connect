import validate from 'middleware/validate';
import { NextApiRequest, NextApiResponse } from 'next';
import { personValidator } from 'src/validators/person';

const personHandler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ ...req.body, method: req.method });
};

export default validate(personValidator, personHandler);
