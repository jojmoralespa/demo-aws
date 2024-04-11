"use server"
import { db } from "@/db";
import { product } from "@/db/schema/schema";
import { eq, asc, and } from "drizzle-orm";

export async function getProducts() {
    "use server"
    // const products = await db.select(
    //     {}
    // ).from(product)

    console.log("Lista de productos")
    // return products
}

export async function createProduct() {
    "use server"
    console.log("Producto creado")
}

export async function updateProduct() {
    "use server"
    console.log("Producto actualizado")
}

export async function deleteProduct() {
    "use server"
    console.log("Producto borrado")
}