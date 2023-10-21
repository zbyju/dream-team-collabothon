import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const category = {
      id,
      name: 'Sample category',
    };

    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } else {
    res.status(405).end();
  }
}
