import {FC} from "react";
import {UserRole} from "@/shared/types";
import {ClientSidebar} from "./clientSidebar";
import {ContributorSidebar} from "./contributorSidebar";
import {GuestSidebar} from "./guestSidebar";
import {useAuthContext} from "@/features";

export const Index: FC = () => {
    const {user, isAuth} = useAuthContext()
    return isAuth ? (user?.role === UserRole.client ? <ClientSidebar/> : <ContributorSidebar/>) : <GuestSidebar/>
};