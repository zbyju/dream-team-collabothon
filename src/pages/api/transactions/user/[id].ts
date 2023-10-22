import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../init";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    try {
      const query = `SELECT 
        t.id as tid, 
        t.date as tdate, 
        t.description as tdescription,
        c.id as cid,
        c.name as cname,
        c.description as cdescription
        FROM 
          transactions t
        JOIN 
          categories c ON t.category = c.id
        WHERE
          t."user" = $1;
    `
      const { rows } = await pool.query(query, [id])
      res.status(200).json(rows);
    } catch (err) {
      console.log(err)
      res.status(200).json([])
    }
  } else {
    res.status(405).end();
  }
}
