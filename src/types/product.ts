export const Category = {
    MenClothing: "men's clothing",
    Jewelery: "jewelery",
    Electronics: "electronics",
    WomenClothing: "women's clothing"
} as const;

type Category = typeof Category[keyof typeof Category];

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
}