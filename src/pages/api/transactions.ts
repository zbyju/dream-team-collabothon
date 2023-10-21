import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "./init";
import { Transaction } from "../../types/model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { rows } = await pool.query<Transaction>(`SELECT * FROM transactions;`)
      return res.status(200).json(rows)
    } catch (err) {
      console.log(err)
      return res.status(200).json([])
    }
  } else if (req.method === "POST") {
    const nt = req.body;
    const text = 'INSERT INTO transactions(date, description, category, count, "user") VALUES($1, $2, $3, $4, $5) RETURNING *'
    const values = [new Date().toISOString(), nt.description, nt.category, nt.count, nt.user]
    const { rows } = await pool.query(text, values)
    console.log(rows)
    res.status(201).json(rows[0]);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
