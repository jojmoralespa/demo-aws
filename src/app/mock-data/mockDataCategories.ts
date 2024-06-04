import { category } from "@/db/schema/schema";

export const categories: typeof category.$inferSelect[] = [
    {
        id: 1,
        name: "SmartPhones",
        description: "celulares y dispositivos móviles",
        imageUrl: ""
    },
    {
        id: 2,
        name: "Hogar",
        description: "electrodomésticos",
        imageUrl: ""
    },
    {
        id: 3,
        name: "Laptops y pc",
        description: "Computadores",
        imageUrl: ""
    },
    {
        id: 4,
        name: "Consolas",
        description: "juegos y consolas de videojuegos",
        imageUrl: ""
    },
    {
        id: 5,
        name: "Audio",
        description: "Dispositivos de audio",
        imageUrl: ""
    },
    {
        id: 6,
        name: "TV y Video",
        description: "Dispositivos dmultimedia y televisores",
        imageUrl: ""
    }
]