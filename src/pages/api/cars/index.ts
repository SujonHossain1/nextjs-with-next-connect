import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from 'server/middleware/mongodb';
import Car from 'server/models/Car';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;
    if (method === 'POST') {
        try {
            const car = await Car.create(body);
            res.status(200).json({
                success: true,
                data: car,
                message: 'Car item created successfully',
            });
        } catch (error) {
            const { message } = error as Error;
            res.status(400).json({
                success: false,
                data: null,
                message,
            });
        }
    } else if (method === 'GET') {
        try {
            const cars = await Car.find({});
            res.status(200).json({
                success: true,
                data: cars,
                message: '',
            });
        } catch (error) {
            const { message } = error as Error;
            res.status(404).json({
                success: false,
                data: null,
                message,
            });
        }
    }
};

export default connectDB(handler);
