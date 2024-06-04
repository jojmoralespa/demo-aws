import { product } from "@/db/schema/schema";

interface Product {
    id: number;
    productName: string;
    imageUrl: string;
    color: string;
    category: string;
    price: string;
}

export const products: Product[]  = [
    {
        id: 1,
        productName: "celular",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQop7bdJ_eDZdEIf5vxGJfpeCi2R14ksjhzA&s",
        price: "1500.99",
        color: "",
        category: "laptops"
    },
    {
        id: 2,
        productName: "celular",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQop7bdJ_eDZdEIf5vxGJfpeCi2R14ksjhzA&s",
        price: "1500.99",
        color: "",
        category: "laptops"
    },
    {
        id: 3,
        productName: "celular",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQop7bdJ_eDZdEIf5vxGJfpeCi2R14ksjhzA&s",
        price: "1500.99",
        color: "",
        category: "laptops"
    },
    {
        id: 4,
        productName: "celular",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQop7bdJ_eDZdEIf5vxGJfpeCi2R14ksjhzA&s",
        price: "1500.99",
        color: "",
        category: "laptops"
    },
    {
        id: 5,
        productName: "celular",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQop7bdJ_eDZdEIf5vxGJfpeCi2R14ksjhzA&s",
        price: "1500.99",
        color: "",
        category: "laptops"
    },
    {
        id: 1,
        productName: "celular",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQop7bdJ_eDZdEIf5vxGJfpeCi2R14ksjhzA&s",
        price: "1500.99",
        color: "",
        category: "laptops"
    }
]