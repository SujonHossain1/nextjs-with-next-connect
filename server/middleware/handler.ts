import { verify } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

export interface NextApiRequestExtend extends NextApiRequest {
    userId: string | null;
    username: string | null;
}

const handler = nextConnect<NextApiRequestExtend, NextApiResponse>({
    onError: (err, req, res, next) => {
        if (err.message) {
            res.status(err.status || 500).json({
                data: null,
                error: err.message,
            });
        } else {
            res.status(500).json({
                success: false,
                data: null,
                error: 'There was an error',
            });
        }
    },
    onNoMatch: (req, res) => {
        res.status(405).json({
            success: false,
            data: null,
            message: `Method ${req.method} Not Allowed! `,
        });
    },
}).use((req, res, next) => {
    req.userId = null;
    req.username = null;

    const { authorization } = req.headers;
    if (!authorization) {
        next();
    } else {
        verify(authorization, 'sujon-secret', (err: any, decoded: any) => {
            if (!err && decoded) {
                req.userId = decoded.userId;
                req.username = decoded.username;
            }
            next();
        });
    }
});

export default handler;
