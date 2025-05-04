import {FC} from "react";

import {SearchInput} from "@/shared/ui";
import {useLocations} from "@/entities";

import {ListLetter} from "./listLetter";
import {ListCities} from "./listCities";
import style from "./style.module.css"
import {useWidgetContext} from "@/widgets/cities/context";

export const Index: FC = () => {

    const { update, blur, focus } = useWidgetContext()

    const { isLoading } = useLocations()
    if (isLoading) return <div>Данные загружаются...</div>

    return (
        <div className={style.container}>
            <h2 className={style.heading}>Список городов</h2>
            <SearchInput
                placeholder={"Искать"}
                onChangeHandler={update}
                onFocus={focus}
                onBlur={blur}
            />
            <ListLetter/>
            <ListCities/>
        </div>
    );
};