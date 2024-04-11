import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, int, text, foreignKey, decimal } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const category = mysqlTable("category", {
	id: int("id").autoincrement().notNull(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	imageUrl: text("image_url").notNull(),
},
(table) => {
	return {
		categoryId: primaryKey({ columns: [table.id], name: "category_id"}),
		id: unique("id").on(table.id),
	}
});

export const product = mysqlTable("product", {
	id: int("id").autoincrement().notNull(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	imageUrl: text("image_url").notNull(),
	price: decimal("price", { precision: 10, scale: 0 }).notNull(),
	color: text("color").notNull(),
	category: int("category").references(() => category.id),
},
(table) => {
	return {
		productId: primaryKey({ columns: [table.id], name: "product_id"}),
		id: unique("id").on(table.id),
	}
});