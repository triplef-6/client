import {FC} from "react";
import navigate from "@/shared/assets/icons/navigate.svg";
import {formatRouteLength} from "@/shared/utills";
import {TourFormatBehavior} from "@/shared/types/utills";

type DistanceProps = {
    length: number
    formatBehavior: TourFormatBehavior
}

export const Distance: FC<DistanceProps> = ({length, formatBehavior}) => {
    return (
        <div className={"flex flex-row gap-2 items-center text-grayscale-400 text-base"}>
            <img width={20} height={20} alt={"navigate"} src={navigate}/>
            <p>{formatRouteLength(length)} {formatBehavior.toLowerCase()}</p>
        </div>
    );
};