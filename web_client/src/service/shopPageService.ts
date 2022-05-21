import { delet, get } from "./axios";
import Product from "../types/Product";

export const getProducts = async (url: string): Promise<Product[]> => await get(url);

export const getProductById = async (url: string, id: string): Promise<Product> => {
    const endpoint = `${url}/${id}`;
    return await get(endpoint)
}

export const getCartItems = async (url: string): Promise<any> => {
    const endpoint = `${url}`;
    return await get(endpoint)
}

export const deleteCartItem = async (url: string, productId: string): Promise<{ message: string }> => {
    const endpoint = `${url}/${productId}`;
    return await delet(endpoint)
}