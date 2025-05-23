import {FC} from "react";
import {Button} from "@/shared/ui";
import {RouteNames} from "@/shared/types";
import {observer} from "mobx-react-lite";
import {authStore as auth, useLogout} from "@/features";
import {useNavigate} from "react-router-dom";

export const LogoutButton: FC = observer(() => {

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
        <Button className={"w-full flex justify-center"} onClick={logOut} variant={"logout"}>
            Выйти
        </Button>
    )
})