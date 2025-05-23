import {FC} from "react";
import {Button, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger} from "@/shared/ui";
import avatar from "@/shared/assets/icons/avatar.svg";
import profile from "@/shared/assets/icons/profile.svg";
import star from "@/shared/assets/icons/star-gray.svg";
import {RouteNames} from "@/shared/types";
import {CreateLink, LoginLink, LogoutLink} from "@/features";

export const ProfileButton: FC = () => {
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
                    <DropdownMenuItem path={`/${RouteNames.FAVOURITES}`}>
                        <img alt={"star"} src={star} height={16} width={16}/>
                        Избранное
                    </DropdownMenuItem>
                    <CreateLink/>
                    <LogoutLink/>
                    <LoginLink/>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}