import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api.excopen.ru/api/",
    withCredentials: true,
    timeout: 10000,
    headers: {
        Accept: 'application/json'
    }
})