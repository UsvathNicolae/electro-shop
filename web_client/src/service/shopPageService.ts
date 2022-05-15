import { get } from "./axios";
import Product from "../types/Product";

export const getProducts = async (url: string): Promise<Product[]> => await get(url);

export const getProductById = async (url: string, id: string): Promise<Product> => {
    const endpoint = `${url}/${id}`;
    return await get(endpoint)
}
