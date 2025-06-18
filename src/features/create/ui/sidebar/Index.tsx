import {FC} from "react";
import style from "./style.module.css"
import {useWindowSize} from "usehooks-ts";
import {Orientation} from "@/features";
import {SubmitButton} from "@/features/create/ui/buttons";

import {Location} from "./Location.tsx";
import {Duration} from "./Duration.tsx";
import {ByCity} from "./ByCity.tsx";
import {Accessibility} from "./Accessibility.tsx";
import {Format} from "./Format.tsx";
import {FormatBehavior} from "./FormatBehavior.tsx";
import {Price} from "./Price.tsx";
import {PriceForPerson} from "./PriceForPerson.tsx";
import {RouteLength} from "./RouteLength.tsx";

export const Index: FC = () => {

    const {width} = useWindowSize()

    return (
        <div className={style.container}>
            <div className={style.subContainer}>
                <span className={style.heading}>Конфигурация</span>
                <Accessibility/>
                <FormatBehavior/>
            </div>
            <div className={style.subContainer}>
                <span className={style.heading}>Место и время</span>
                <Location/>
                <ByCity/>
                <RouteLength/>
                <Duration/>
            </div>
            <div className={style.subContainer}>
                <span className={style.heading}>Цена</span>
                <Format/>
                <Price/>
                <PriceForPerson/>
            </div>
            {width >= 1024 && <SubmitButton orientation={Orientation.HORIZONTAL}/>}
        </div>
    );
}