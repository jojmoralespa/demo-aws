import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
const { DB_USER } = process.env

const poolConnection = mysql.createPool({
    host: "db-app-example.chqcgamuilok.us-east-1.rds.amazonaws.com",
    user: DB_USER,
    database: "db_prueba",
});
export const db = drizzle(poolConnection);