import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
const { DB_USER , DB_PASSWORD} = process.env

const poolConnection = mysql.createPool({
    host: "mysql-project.chqcgamuilok.us-east-1.rds.amazonaws.com",
    user: DB_USER,
    database: "mysql_proyecto",
    password: DB_PASSWORD
});
export const db = drizzle(poolConnection);