import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default {
  schema: "./src/db/*",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: "mysql-project.chqcgamuilok.us-east-1.rds.amazonaws.com",
    port: 3306,
    database: "mysql_project",
  },
} satisfies Config;