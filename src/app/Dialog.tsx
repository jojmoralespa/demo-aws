import React, { ChangeEvent, FormEvent, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import axios from "axios";
import { getCategories } from "./actions/services/categoryServices";
import { category, product } from "@/db/schema/schema";
import { createProduct } from "./actions/services/productServices";

export default function DialogForm({
  categories,
}: {
  categories: (typeof category.$inferSelect)[];
}) {
  const [image, setImage] = useState<string>();
  const [selectedImage, setSelectedImage] = useState<File>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    console.log(selectedImage);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = formData.get("id") as string;
    const name = formData.get("product") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const color = formData.get("color") as string;
    const category = formData.get("category") as string;
    try {
      if (selectedImage) {
        const formData = new FormData();
        formData.append("name", selectedImage.name);
        formData.append("image", selectedImage);

        const headers = {
          "Content-Type": "multipart/form-data",
        };
        debugger;
        const { data } = await axios.post("/api/s3", formData, { headers });
        if (data.success) {
          setImage(data.data);
          const producto: typeof product.$inferInsert = {
            id: parseInt(id,10),
            name: name,
            description: description,
            imageUrl: data.data,
            price: price,
            color: color,
            category: parseInt(category,10),
          };
          createProduct(producto);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg bg-green-600 font-bold rounded-lg w-[150px] p-3 m-3">
          Crear Producto
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="a overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Crear Producto
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Ingresa la información para la creación del producto. Click Guardar
            una vez completado el formulario.
          </Dialog.Description>
          <div className="flex flex-col space-y-4">
            <form onSubmit={onSubmit} className="flex flex-col gap-2">
              <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  ID:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  name="id"
                  type="number"
                  placeholder="name"
                ></input>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Product Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="product"
                  type="text"
                  placeholder="name"
                ></input>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="name"
                ></input>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Color:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="color"
                  name="color"
                  type="text"
                  placeholder="color"
                ></input>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  name="price"
                  type="number"
                  placeholder="price"
                ></input>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category:
                </label>
                <select name="category">
                  <option> selecciona una categoria</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="image" className="f font-bold">
                  Selecciona la imagen
                </label>
                <input id="image" type="file" onChange={handleFileChange} />
              </div>
              <button
                className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                type="submit"
              >
                Save changes
              </button>
            </form>
          </div>

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-auto appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
