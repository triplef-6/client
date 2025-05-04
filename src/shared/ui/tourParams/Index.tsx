import {FC} from "react";
import {Hours} from "@/shared/ui/tourParams/Hours.tsx";
import {Distance} from "@/shared/ui/tourParams/Distance.tsx";
import {ParamsContainer} from "@/shared/ui/tourParams/ParamsContainer.tsx";
import {TourFormatBehavior} from "@/shared/types/utills";

type TourParamsProps = {
    duration: number
    length: number
    formatBehavior: TourFormatBehavior
}

export const TourParams:FC<TourParamsProps> = ({duration, length, formatBehavior}) => {
    return (
        <ParamsContainer>
            <Hours duration={duration}/>
            <Distance length={length} formatBehavior={formatBehavior}/>
        </ParamsContainer>
    );
};