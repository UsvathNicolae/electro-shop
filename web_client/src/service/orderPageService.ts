import { post, get } from "./axios";
import Order from "../types/Order"

export const getOrdersOfUser = async (url: string, userId: string): Promise<Order[]> => {
  return await get(url)
}

export const getOrdersById = async (url: string, id: string): Promise<Order[]> => {
  const endpoint = `${url}/${id}`;
  return await get(endpoint)
}

export const postOrder = async (): Promise<{message: string}> => {
  return await post('/order/post')
}