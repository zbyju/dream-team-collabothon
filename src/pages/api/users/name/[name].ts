import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../init";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { name } = req.query;
    console.log(name)
    try {
      const { rows } = await pool.query(
        'SELECT * FROM users WHERE name = $1',
        [name]
      )
      if (rows && rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: err })
    }
  } else {
    res.status(405).end();
  }
}
