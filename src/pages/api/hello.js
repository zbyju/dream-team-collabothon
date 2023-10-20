import pg from 'pg';
import { Connector } from '@google-cloud/cloud-sql-connector';
const { Pool } = pg;

const connector = new Connector();
const clientOpts = await connector.getOptions({
  instanceConnectionName: process.env.DB_HOST,
  ipType: 'PUBLIC',
});
const pool = new Pool({
  ...clientOpts,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  max: 5
});

export default async function hello(req, res) {
  console.log("test")
  console.log(pool)
  const { rows } = await pool.query('SELECT * FROM demo;');
  console.table(rows);

  res.status(200).json({ name: 'John Doe' })
}
