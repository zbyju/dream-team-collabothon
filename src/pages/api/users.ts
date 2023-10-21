import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "./init";
import { User } from "../../types/model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { rows } = await pool.query<User>(`SELECT * FROM users;`);
      return res.status(200).json(rows);
    } catch (err) {
      console.log(err)
      return res.status(200).json([])
    }
  } else if (req.method === 'POST') {
    const newUser = req.body;
    console.log(newUser)
    res.status(201).json(newUser);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
