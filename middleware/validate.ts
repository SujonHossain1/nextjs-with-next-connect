import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

export const validate = (
    schema: OptionalObjectSchema<ObjectShape>,
    handler: NextApiHandler
) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const { method } = req;
        if (['POST', 'PUT'].includes(method as string)) {
            try {
                req.body = await schema.camelCase().validate(req.body, {
                    stripUnknown: true,
                    abortEarly: false,
                });
            } catch (error) {
                return res.status(400).json(error);
            }
        }
        await handler(req, res);
    };
};

export default validate;
