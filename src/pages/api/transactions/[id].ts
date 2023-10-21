import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const transaction = {
      id,
      name: 'Sample transaction',
    };

    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } else {
    res.status(405).end();
  }
}
