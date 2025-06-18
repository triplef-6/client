import {FC} from "react";
import s from "@/features/booking/ui/style.module.css";
import {Binoculars} from "lucide-react";

type TourNameProps = {
    name: string
}

export const TourName: FC<TourNameProps> = ({name}) => {
    return (
        <div className={s.subContainer}>
            <div className={s.smallHeading}>
                <Binoculars width={20} height={20} className={"text-grayscale-500"}/>
                <span className={s.bold}>
                    Экскурсия
                </span>
            </div>
            <p className={s.text}>
                {name}
            </p>
        </div>
    );
};