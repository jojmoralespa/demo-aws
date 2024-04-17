import React, { ChangeEvent, FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
  import axios from "axios";

export default function DialogForm() {
  const [image, setImage] = useState<string>();
  const [selectedImage, setSelectedImage] = useState<File>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try{
      if (selectedImage) {
      const formData = new FormData();
      formData.append("name", selectedImage.name);
      formData.append("image", selectedImage);
      const headers = {
        "Content-Type":"multipart/form-data"
      }

      const {data} = await axios.post("/api/s3", formData, {headers})
      if(data.success){
        setImage(data.data.url)

      }
    }
    }catch(e){
      console.error(e)
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
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Make changes to your profile here. Click save when youre done.
          </Dialog.Description>
          <form onSubmit={onSubmit}>
            <label htmlFor="image">Selecciona la imagen</label>
            <input id="image" type="file" onChange={handleFileChange}></input>
            <Dialog.Close asChild>
              <button
                className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                type="submit"
              >
                Save changes
              </button>
            </Dialog.Close>
          </form>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
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
