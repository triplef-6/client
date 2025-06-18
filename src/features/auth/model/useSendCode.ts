import { useMutation } from "@tanstack/react-query";
import { sendPhoneCode } from "@/features/auth/api";

export const useSendCode = () => {
    return useMutation({
        mutationFn: (phone: string) => sendPhoneCode(phone),
    })
}