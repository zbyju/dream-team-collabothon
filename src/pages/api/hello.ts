import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "./init"

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  console.log("test")
  console.log(pool)
  const { rows } = await pool.query('SELECT * FROM demo;');
  console.table(rows);

  res.status(200).json(rows)
}
