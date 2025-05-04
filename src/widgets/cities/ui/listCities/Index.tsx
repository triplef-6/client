import {FC} from "react";
import style from "./style.module.css"
import {useWidgetContext} from "@/widgets/cities/context";

export const Index: FC = () => {

    const {context, selectCity} = useWidgetContext()

    return (
        <div className={style.container}>
            {
                context.cities.length === 0 &&
                <span className={style.warning}>
                    Город не найден
                </span>
            }
            {context.cities.map(city => (
                <span key={city} className={style.city} onClick={() => selectCity(city)}>
                    {city}
                </span>
            ))}
        </div>
    );
};