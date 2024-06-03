import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, text, foreignKey, decimal } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const category = mysqlTable("category", {
	id: int("id").autoincrement().notNull(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	imageUrl: text("image_url").notNull(),
},
	(table) => {
		return {
			categoryId: primaryKey({ columns: [table.id], name: "category_id" }),
		}
	});

export const product = mysqlTable("product", {
	id: int("id").autoincrement().notNull(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	imageUrl: text("image_url").notNull(),
	price: decimal("price", { precision: 13, scale: 2 }).notNull(),
	color: text("color").notNull(),
	category: int("category").notNull().references(() => category.id),
},
	(table) => {
		return {
			productId: primaryKey({ columns: [table.id], name: "product_id" }),
		}
	});
