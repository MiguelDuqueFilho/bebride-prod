import { NextApiRequest, NextApiResponse, NextPage } from 'next';

import jwt from 'next-auth/jwt';

const secret = process.env.JWT_SECRET || '';

const authorization = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  const token = await jwt.getToken({ req, secret });

  if (!token) {
    return res.status(401).end();
  }

  next();
};

export default authorization;
