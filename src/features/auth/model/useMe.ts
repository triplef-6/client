import {useQuery} from "@tanstack/react-query";
import {getMe} from "@/features/auth/api";
import {IMe, UserRole} from "@/shared/types";
import avatar from "@/shared/assets/icons/avatar.svg";

const fallback: IMe = {
    id: 0,
    role: UserRole.client,
    avatar: avatar,
    avatarFile: null,
    name: "Имя",
    surname: "Фамилия",
    email: "",
    tags: ["Гастрономический  ", "Водный сплав  ", "Горный треккинг  ", "Скрытые жемчужины  ", "Романтический  "]
}

export const useMe = () => {
    return useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        staleTime: 300_000,
        initialData: fallback,
        retry: false
    })
}