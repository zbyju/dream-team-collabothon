import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "./init";
import { Category } from "../../types/model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { rows } = await pool.query<Category>(`SELECT * FROM categories;`)
    console.log(rows)
    return res.status(200).json(rows)
  } catch (err) {
    return res.status(200).json([])
  }
}
