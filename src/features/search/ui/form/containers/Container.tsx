import {FC, ReactNode} from "react";
import {cn} from "@/app/lib/utils.ts";
import style from "./style.module.css"
import {Orientation} from "@/features/search/types";

type ContainerProps = {
    children: ReactNode
    orientation: Orientation
}

export const Container: FC<ContainerProps> = ({children, orientation}) => {
    return (
        <div
            role={"form"}
            className={cn(
                style.container,
                orientation === Orientation.HORIZONTAL ? style.containerHorMode : style.containerVerMode
            )}
        >
            {children}
        </div>
    );
};