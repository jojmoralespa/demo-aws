"use server"
import { db } from "@/db";
import { category, product } from "@/db/schema/schema";
import { eq, asc, and } from "drizzle-orm";

interface Product {
    id: number;
    productName: string;
    imageUrl: string;
    color: string;
    category: string;
    price: string;
}

export async function getProducts(): Promise<Product[]> {
    "use server"
    const products = await db.select(
        {
            id: product.id,
            productName: product.name,
            imageUrl: product.imageUrl,
            color: product.color,
            category: category.name,
            price: product.price
        }
    )
        .from(product)
        .innerJoin(category, eq(product.category, category.id))

    return products
}

export async function createProduct(producto: typeof product.$inferInsert) {
    "use server"
    await db.insert(product
    ).values(producto)
}

export async function updateProduct(id: number, fields: typeof product.$inferInsert) {
    "use server"
    await db.update(product).set(fields).where(eq(product.id, id));
}

export async function deleteProduct(id: number) {
    "use server"
    await db.delete(product).where(eq(product.id, id));

}