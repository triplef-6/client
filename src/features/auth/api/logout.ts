import {ApiException} from "@/shared/lib";
import axios, {isAxiosError} from "axios";

export const logout = async (): Promise<void> => {
    try {
        await axios.post(
            "https://api.excopen.ru/logout",
            {},
            {
                withCredentials: true,
                timeout: 5000,
                headers: {
                    Accept: "application/json"
                }
            }
        )
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<void>(e.message, e.response?.status)
        }
        throw e
    }
}