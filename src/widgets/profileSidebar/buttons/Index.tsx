import {FC} from "react";
import {Button, SidebarButton} from "@/shared/ui";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import {useCreateTour} from "@/shared/hooks";
import {RouteNames} from "@/shared/types";
import {useNavigate} from "react-router-dom";

export const Index: FC = () => {

    const {click} = useCreateTour()
    const navigate = useNavigate()

    return (
        <>
            <SidebarButton image={favourite} label={"Избранное"}/>
            <Button className={"w-full"} onClick={click}>
                Предложить экскурсию
            </Button>
            <Button className={"flex justify-center w-full"} variant={"secondary"} onClick={() => navigate(`/${RouteNames.ON_BOARDING}`)}>
                Изменить рекомендации
            </Button>
        </>
    );
};