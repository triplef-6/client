import {FC} from "react";
import s from "@/features/booking/ui/style.module.css";
import {Clock} from "lucide-react";
import {formatHours} from "@/shared/lib";

type TourDurationProps = {
    duration: number
}

export const TourDuration: FC<TourDurationProps> = ({duration}) => {
    return (
        <div className={s.subContainer}>
            <div className={s.smallHeading}>
                <Clock width={20} height={20} className={"text-grayscale-500"}/>
                <span className={s.bold}>Длительность</span>
            </div>
            <p className={s.text}>
                Мероприятие будет длиться {formatHours(duration)}
            </p>
        </div>
    );
};