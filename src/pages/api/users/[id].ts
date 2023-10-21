import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../init";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    try {
      const user = await pool.query(`SELECT * FROM users WHERE id=${id};`)
      if (user) {
        res.status(200).json(user);
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
