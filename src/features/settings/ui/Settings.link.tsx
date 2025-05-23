import {FC} from "react";
import {observer} from "mobx-react-lite";
import {Settings} from "lucide-react";
import {DropdownMenuItem} from "@/shared/ui";
import {RouteNames} from "@/shared/types";
import {authStore as auth} from "@/features";

export const SettingsLink: FC = observer(() => {

    const isAuth = auth.isAuth
    if (!isAuth) return null

    return (
        <DropdownMenuItem path={`/${RouteNames.SETTINGS}`}>
            <Settings className={"text-grayscale-350"} height={16} width={16}/>
            Настройки
        </DropdownMenuItem>
    )
})