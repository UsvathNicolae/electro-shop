import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
})

axiosInstance.interceptors.request.use((req) => {
    if(req.headers) {
        req.headers['Content-Type'] = 'application/json';
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}` || ''
    }
    return req;
})

export const get = async<T>(url: string): Promise<T> => {
    const response = await axiosInstance.get(url)
    return response.data
}

export const put = async<T>(url: string, data: any): Promise<T> => {
    const response = await axiosInstance.put(url,data)
    return response.data
}

export const post = async<T>(url: string, data: any): Promise<T> => {
    const response = await axiosInstance.post(url,data)
    return response.data
}

export const delet = async<T>(url: string): Promise<T> => {
    const response = await axiosInstance.delete(url)
    return response.data
}
