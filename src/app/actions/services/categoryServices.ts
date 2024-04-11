"use server"
import { db } from "@/db";
import { product } from "@/db/schema/schema";
import { eq, asc, and } from "drizzle-orm";

export async function getCategories() {
    "use server"
    const products = await db.select().from(product)

    console.log("Lista de productos")
    return products
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