import {FC} from "react";
import s from "@/features/booking/ui/style.module.css";
import {Users} from "lucide-react";
import {formatPeople} from "@/shared/lib";
import {Slider} from "@/shared/ui";
import {ISlot} from "@/shared/types";

type SliderProps = {
    currentSlot: ISlot | null
    groupCapacity: number
    updateCapacity: (value: number[]) => void
}

export const GroupCapacitySlider: FC<SliderProps> = ({currentSlot, groupCapacity, updateCapacity}) => {

    if (currentSlot === null) return null

    return (
        <div className={s.subContainer}>
            <div className={s.smallHeading}>
                <Users width={20} height={20} className={"text-grayscale-500"}/>
                <span className={s.bold}>Размер группы</span>
            </div>
            <p className={s.text}>Забранированно мест {formatPeople(groupCapacity)}</p>
            <Slider
                value={[groupCapacity]}
                onValueChange={updateCapacity}
                defaultValue={[1]}
                max={currentSlot.freeSeats}
                step={1}
            />
        </div>
    );
};