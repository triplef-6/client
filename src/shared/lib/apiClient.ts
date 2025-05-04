import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://excopen-prod-back-v0-1-1.onrender.com/api/",
    withCredentials: true,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})