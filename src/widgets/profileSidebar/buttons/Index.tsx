import {FC} from "react";
import {Button, SidebarButton} from "@/shared/ui";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import {useCreateTour} from "@/shared/hooks";

export const Index: FC = () => {

    const {click} = useCreateTour()

    return (
        <>
            <SidebarButton image={favourite} label={"Избранное"}/>
            <Button className={"w-full"} onClick={click}>Предложить экскурсию</Button>
        </>
    );
};