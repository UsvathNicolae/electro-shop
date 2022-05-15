import { put, post } from "./axios";

export const addToCart = async (data: any): Promise<{ message: string }> => await put('/user/add', data);

export const addProduct = async (data: any): Promise<{ message: string }> => await post('/product/post', data);

