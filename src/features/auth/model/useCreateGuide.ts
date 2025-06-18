import {useMutation} from "@tanstack/react-query";
import {GuideDto, RouteNames} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {createGuide} from "@/features/auth/api";
import {useNavigate} from "react-router-dom";

export const useCreateGuide = () => {

    const navigate = useNavigate()

    return useMutation<void, ApiException<GuideDto>, GuideDto>({
        mutationFn: (dto) => createGuide(dto),
        onError: (e: ApiException<GuideDto>) => {
            console.log("Не удалось авторизовать гида", e.message)
            navigate(`/${RouteNames.ERROR}`)
        },
    })
}