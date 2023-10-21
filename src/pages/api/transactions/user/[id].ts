import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../init";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    try {
      const rows = pool.query(`SELECT * FROM transactions;`)
      res.status(200).json(rows);
    } catch (err) {
      console.log(err)
      res.status(200).json([])
    }
  } else {
    res.status(405).end();
  }
}
