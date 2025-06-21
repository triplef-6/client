import {FC, JSX} from "react";
import s from "@/features/booking/ui/style.module.css";
import {Users} from "lucide-react";
import {formatPeople} from "@/shared/lib";
import {Slider} from "@/shared/ui";
import {ISlot, TourFormat} from "@/shared/types";

type SliderProps = {
    tourFormat: TourFormat
    currentSlot: ISlot | null
    groupCapacity: number
    updateCapacity: (value: number[]) => void
}

export const GroupCapacitySlider: FC<SliderProps> = (
    {tourFormat, currentSlot, groupCapacity, updateCapacity}
) => {

    const heading: JSX.Element = (
        <div className={s.smallHeading}>
            <Users width={20} height={20} className={"text-grayscale-500"}/>
            <span className={s.bold}>Размер группы</span>
        </div>
    )

    if (currentSlot === null) return null

    if (currentSlot.freeSeats < 1) return (
        <div className={s.subContainer}>
            {heading}
            <p className={s.text}>Свободных мест нет</p>
        </div>
    )

    if (tourFormat === TourFormat.INDIVIDUAL) return (
        <div className={s.subContainer}>
            {heading}
            <p className={s.text}>Экскурсия индивидуальная</p>
        </div>
    )

    return (
        <div className={s.subContainer}>
            {heading}
            <p className={s.text}>Забранировано мест {formatPeople(groupCapacity)}</p>
            <Slider
                value={[groupCapacity]}
                onValueChange={updateCapacity}
                defaultValue={[1]}
                max={currentSlot.freeSeats}
                step={1}
                min={1}
            />
        </div>
    );
};