import {FC, ReactNode} from "react";
import style from "./style.module.css"
import {cn} from "@/app/lib/utils.ts";
import {Orientation} from "@/features/search/types";

type HeaderProps = {
    children: ReactNode
    orientation: Orientation
}

export const Header: FC<HeaderProps> = ({children, orientation}) => {
    return (
        <div
            className={cn(
                style.header,
                orientation === Orientation.HORIZONTAL ? style.headerHorMode : style.headerVerMode
            )}
        >
            {
                orientation === Orientation.VERTICAL &&
                <div className={style.heading}>
                    <h3>Куда теперь?</h3>
                </div>
            }
            {children}
        </div>
    );
};