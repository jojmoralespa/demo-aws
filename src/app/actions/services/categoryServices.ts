"use server"
import { db } from "@/db";
import { category, product } from "@/db/schema/schema";
import { eq, asc, and } from "drizzle-orm";

export async function getCategories() {
    "use server"
    const categories = await db.select({
        name: category.name,
        description: category.description,
        imageUrl: category.imageUrl
    }).from(category)

    console.log("Lista de productos")
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