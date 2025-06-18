import {FC} from "react";
import {Button, SidebarButton} from "@/shared/ui";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import {RouteNames} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {AuthGuideDialog, LogoutButton} from "@/features";

export const Index: FC = () => {

    const navigate = useNavigate()

    return (
        <>
            <SidebarButton image={favourite} label={"Избранное"}/>
            <AuthGuideDialog/>
            <Button className={"flex justify-center w-full"} variant={"secondary"} onClick={() => navigate(`/${RouteNames.ON_BOARDING}`)}>
                Изменить рекомендации
            </Button>
            <LogoutButton/>
        </>
    );
};