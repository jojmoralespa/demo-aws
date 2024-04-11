"use client";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} from "./actions/services/productServices";
import Trash from "@/components/svg/Trash";
import Edit from "@/components/svg/Edit";
import DialogForm from "./Dialog";
import { useEffect, useState } from "react";

interface Product {
  productName: string;
  imageUrl: string;
  color: string;
  category: string;
  price: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const productos = [
    {
      product: "Apple MacBook Pro",
      image: "",
      color: "gray",
      category: "Laptop",
      price: "$2500",
    },
    {
      product: "Apple MacBook Pro",
      image: "",
      color: "gray",
      category: "Laptop",
      price: "$2500",
    },
    {
      product: "Apple MacBook Pro",
      image: "",
      color: "gray",
      category: "Laptop",
      price: "$2500",
    },
  ];

  async function getProductsHandler() {
    const products = await getProducts();
    setProducts(products);
  }

  function onClickCreate() {
    createProduct();
  }

  function onClickDelete() {
    deleteProduct();
  }

  function onClickUpdate() {
    updateProduct();
  }

  useEffect(() => {
    getProductsHandler();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className=" flex flex-col w-[70vw]">
        <DialogForm/>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  image
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.productName}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{product.productName}</td>
                  <td className="px-6 py-4">
                    {product.imageUrl}
                  </td>
                  <td className="px-6 py-4">{product.color}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4 flex flex-ron gap-2 p-2">
                    <button className="bg bg-red-500 p-3 rounded-md">
                      <Trash />
                    </button>
                    <button className="bg bg-yellow-400 p-3 rounded-md">
                      <Edit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
