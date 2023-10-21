import pg from 'pg';
import { Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector';

const { Pool } = pg;
const connector = new Connector();
const clientOpts = await connector.getOptions({
  instanceConnectionName: process.env.DB_HOST || "localhost",
  ipType: IpAddressTypes.PUBLIC,
});

export const pool = new Pool({
  ...clientOpts,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  max: 10
});
