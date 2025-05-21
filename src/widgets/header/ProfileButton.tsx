import {
    Button, DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/shared/ui";
import avatar from "@/shared/assets/icons/avatar.svg";
import profile from "@/shared/assets/icons/profile.svg";
import create from "@/shared/assets/icons/wallet.svg";
import star from "@/shared/assets/icons/star-gray.svg";
import next from "@/shared/assets/icons/next-secondary.svg";
import {FC, JSX} from "react";
import {RouteNames, UserRole} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {useAuthContext, useLogoutFromGoogle, useMe} from "@/features";

export const ProfileButton: FC = () => {

    const navigate = useNavigate()
    const {isAuth} = useAuthContext()
    const {user} = useMe()
    const logOutFromGoogle = useLogoutFromGoogle()

    const logIn = () => navigate(`/${RouteNames.AUTH}`)

    const logOut = () => {
        logOutFromGoogle()
        navigate(`/${RouteNames.AUTH}`)
    }

    const createItem: JSX.Element =
        <>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className={"justify-between"} path={`/${RouteNames.CREATE}`}>
                <div className={"flex flex-row gap-2 items-center"}>
                    <img alt={"create"} src={create} height={16} width={16}/>
                    Предложить эк-ю
                </div>
                <img alt={"next"} src={next} height={16} width={16}/>
            </DropdownMenuItem>
        </>

    /*
    * const settingItem: JSX.Element =
        <DropdownMenuItem path={`/${RouteNames.SETTINGS}`}>
            <Settings className={"text-grayscale-350"} height={16} width={16}/>
            Настройки
        </DropdownMenuItem>
    * */

    const logOutButton: JSX.Element =
        <>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={logOut} className={"text-secondary-red font-normal"} path={`/${RouteNames.CREATE}`}>
                Выйти
            </DropdownMenuItem>
        </>

    const logInButton: JSX.Element =
        <>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={logIn} className={"font-normal text-grayscale-500"} path={`/${RouteNames.CREATE}`}>
                Войти
            </DropdownMenuItem>
        </>

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size={"sm"}>
                    Личный кабинет
                    <img alt={"avatar"} src={avatar} width={20} height={20}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side={"bottom"} align={"end"}>
                <DropdownMenuGroup>
                    <DropdownMenuItem path={`/${RouteNames.PROFILE}`}>
                        <img alt={"profile"} src={profile} height={16} width={16}/>
                        Профиль
                    </DropdownMenuItem>
                    {
                        /*isAuth && settingItem*/
                    }
                    <DropdownMenuItem path={`/${RouteNames.FAVOURITES}`}>
                        <img alt={"star"} src={star} height={16} width={16}/>
                        Избранное
                    </DropdownMenuItem>
                    {user?.role === UserRole.guide && isAuth && createItem}
                    {isAuth && logOutButton}
                    {!isAuth && logInButton}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};