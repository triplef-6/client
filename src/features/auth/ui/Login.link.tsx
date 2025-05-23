import {observer} from "mobx-react-lite";
import {FC} from "react";
import {DropdownMenuItem, DropdownMenuSeparator} from "@/shared/ui";
import {RouteNames} from "@/shared/types";
import {authStore as auth} from "@/features";
import {useNavigate} from "react-router-dom";

export const LoginLink: FC = observer(() => {

    const navigate = useNavigate()

    const isAuth = auth.isAuth
    if (isAuth) return null

    return (
        <>
            <DropdownMenuSeparator/>
            <DropdownMenuItem
                onClick={() => navigate(`/${RouteNames.AUTH}`)}
                className={"font-normal text-grayscale-500"}
                path={`/${RouteNames.AUTH}`}
            >
                Войти
            </DropdownMenuItem>
        </>
    );
})