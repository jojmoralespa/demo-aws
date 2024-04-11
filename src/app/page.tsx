"use client"
// import { createProduct, updateProduct, deleteProduct, getProducts } from "./actions/services/productServices";
import Trash from "@/components/svg/trash";
import Edit from "@/components/svg/edit";
import DialogForm from "./Dialog";

export default function Home() {
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

  // function onClickCreate() {
  //   createProduct();
  // }

  // function onClickDelete() {
  //   deleteProduct();
  // }

  // function onClickUpdate() {
  //   updateProduct();
  // }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-200">
      <div className=" flex flex-col w-[70vw]">
        {/* <DialogForm/> */}
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
              {productos.map((producto) => (
                <tr
                  key={producto.product}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{producto.product}</td>
                  <td className="px-6 py-4">{producto.image}</td>
                  <td className="px-6 py-4">{producto.color}</td>
                  <td className="px-6 py-4">{producto.category}</td>
                  <td className="px-6 py-4">{producto.price}</td>
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
