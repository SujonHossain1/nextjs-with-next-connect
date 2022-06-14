import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectDB from 'server/middleware/mongodb';
import Faq from 'server/models/Faq';

const handler = nc<NextApiRequest, NextApiResponse>()
    .get(async (req, res) => {
        try {
            const faqs = await Faq.find({});
            res.status(200).json({
                success: true,
                data: faqs,
                message: '',
            });
        } catch (error) {
            const { message } = error as Error;
            res.status(200).json({
                success: false,
                data: null,
                message,
            });
        }
    })
    .post(async (req, res) => {
        try {
            const faq = await Faq.create(req.body);
            res.status(200).json({
                success: true,
                data: faq,
                message: '',
            });
        } catch (error) {
            const { message } = error as Error;
            res.status(200).json({
                success: false,
                data: null,
                message,
            });
        }
    });

export default connectDB(handler);
