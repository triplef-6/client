import {FC} from "react";
import {UserRole} from "@/shared/types";
import {ClientSidebar} from "./clientSidebar";
import {ContributorSidebar} from "./contributorSidebar";
import {GuestSidebar} from "./guestSidebar";
import {useAuthContext, useMe} from "@/features";

export const Index: FC = () => {

    const {isAuth} = useAuthContext()
    const {user} = useMe()

    return isAuth ?
        (
            user?.role === UserRole.client ?
                <ClientSidebar/> :
                <ContributorSidebar/>
        ) :
        <GuestSidebar/>

}