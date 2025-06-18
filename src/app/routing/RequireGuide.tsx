import React, {FC} from "react";
import {RouteNames, UserRole} from "@/shared/types";
import {observer} from "mobx-react-lite";
import {authStore as auth, useMe} from "@/features";
import {Navigate} from "react-router-dom";

type RequireGuideProps = {
    children: React.ReactNode;
}

export const RequireGuide: FC<RequireGuideProps> = observer((props) => {

    const {me} = useMe()
    const isAuth = auth.isAuth

    if (!isAuth || me.role !== UserRole.guide) return <Navigate to={`/${RouteNames.MAIN}`}/>
    return props.children

})