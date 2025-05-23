import {FC} from "react";
import {DropdownMenuItem, DropdownMenuSeparator} from "@/shared/ui";
import {RouteNames} from "@/shared/types";
import {observer} from "mobx-react-lite";
import {authStore as auth, useLogout} from "@/features";
import {useNavigate} from "react-router-dom";

export const LogoutLink: FC = observer(() => {

    const isAuth = auth.isAuth

    const navigate = useNavigate()
    const {mutate: logoutFromGoogle} = useLogout()

    const logOut = () => {
        auth.logout()
        logoutFromGoogle()
        navigate(`/${RouteNames.AUTH}`)
    }

    if (!isAuth) return null

    return (
        <>
            <DropdownMenuSeparator/>
            <DropdownMenuItem
                onClick={logOut}
                className={"text-secondary-red font-normal"}
                path={`/${RouteNames.AUTH}`}
            >
                Выйти
            </DropdownMenuItem>
        </>
    )
})