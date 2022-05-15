import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
})

axiosInstance.interceptors.request.use((req) => {
    if(req.headers) {
        req.headers['Content-Type'] = 'application/json';
    }
    return req;
})

export const get = async<T>(url: string): Promise<T> => {
    const response = await axiosInstance.get(url)
    return response.data
}
