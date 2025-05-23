import {FC} from "react";
import navigate from "@/shared/assets/icons/navigate.svg";
import {TourFormatBehavior} from "@/shared/types/utills";

type DistanceProps = {
    length: number
    formatBehavior: TourFormatBehavior
}

export const Distance: FC<DistanceProps> = ({length, formatBehavior}) => {
    return (
        <div className={"flex flex-row gap-2 items-center text-grayscale-400 text-base"}>
            <img width={20} height={20} alt={"navigate"} src={navigate}/>
            <p>{`${length} км`} {formatBehavior.toLowerCase()}</p>
        </div>
    );
};