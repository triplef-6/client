import {observer} from "mobx-react-lite";
import {RouteNames, UserRole} from "@/shared/types";
import {authStore as auth, useMe} from "@/features";
import {DropdownMenuItem, DropdownMenuSeparator} from "@/shared/ui";
import create from "@/shared/assets/icons/wallet.svg";
import next from "@/shared/assets/icons/next-secondary.svg";

export const Index = observer(() => {

    const isAuth = auth.isAuth
    const {me} = useMe()

    return (
        isAuth && me.role == UserRole.guide
            ?
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
            :
            null
    )
})