import {FC} from "react";
import {MapSetter} from "@/shared/ui";
import {createTourStore as store} from "@/features/create/model";
import {observer} from "mobx-react-lite";
import {useSubmitted} from "@/shared/hooks";
import {cn} from "@/app/lib";
import style from "@/features/create/ui/main/style.module.css";
import {useMap} from "@/features/create/hooks";

export const Map: FC = observer(() => {

    const {value, update, isCorrected} = useMap(store.coordinates)
    const {isSubmitted} = useSubmitted(store)

    return (
        <div
            className={cn(
                "flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0",
                isCorrected && isSubmitted && "border border-secondary-red"
            )}
        >
            <span className={style.smHeading}>
                Выберите место встречи:
            </span>
            <p className={style.text}>
                Укажите точку на карте, чтобы пользователям было проще найти вашу экскурсию.
            </p>
            <MapSetter value={value} update={update}/>
        </div>
    );
})