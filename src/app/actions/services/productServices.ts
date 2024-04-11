"use server"
import { db } from "@/db";
import { category, product } from "@/db/schema/schema";
import { eq, asc, and } from "drizzle-orm";

interface Product {
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