"use server"
import { db } from "@/db";
import { category, product } from "@/db/schema/schema";
import { eq, asc, and } from "drizzle-orm";

export async function getCategories(): Promise<typeof category.$inferSelect[]> {
    "use server"
    const categories = await db.select({
        id: category.id,
        name: category.name,
        description: category.description,
        imageUrl: category.imageUrl
    }).from(category)

    return categories
}

export async function createCategory() {
    "use server"
    console.log("Producto creado")
}

export async function updateCategory() {
    "use server"
    console.log("Producto actualizado")
}

export async function deleteCategory() {
    "use server"
    console.log("Producto borrado")
}