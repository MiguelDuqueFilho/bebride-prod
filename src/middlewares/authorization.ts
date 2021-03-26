import { NextApiRequest, NextApiResponse, NextPage } from 'next';
import { getSession } from 'next-auth/client';
import jwt from 'next-auth/jwt';

const secret = process.env.JWT_SECRET || '';

const authorization = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  const token = await jwt.getToken({ req, secret });
  if (!token) {
    res.status(401).json({
      error: new Error('Favor fazer a autenticação!')
    });
    return res.end();
  }

  next();
};

export default authorization;
