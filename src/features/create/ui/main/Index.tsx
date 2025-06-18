import {FC} from "react";
import style from "./style.module.css"
import {useWindowSize} from "usehooks-ts";
import {SubmitButton} from "@/features/create/ui/buttons";

import {TagsList} from "./TagsList.tsx";
import {ImagesLoader} from "./ImagesLoader.tsx";
import {Title} from "./Title.tsx";
import {Info} from "./Info.tsx";
import {WhatToExpect} from "./WhatToExpect.tsx";
import {OrgDetails} from "./OrgDetails.tsx";
import {MeetingPlace} from "./MeetingPlace.tsx";
import {Topics} from "./Topics.tsx";
import {Places} from "./Places.tsx";
import {Map} from "./Map.tsx";
import {Orientation} from "@/features";
import {CreatedSlots} from "@/features/create/ui/slot";

export const Index: FC = () => {

    const {width} = useWindowSize()

    return (
        <div className={style.container}>
            <span className={style.heading}>
                События
            </span>
            <CreatedSlots/>
            <span className={style.heading}>
                Тематика
            </span>
            <TagsList/>
            <span className={style.heading}>
                Карта
            </span>
            <Map/>
            <span className={style.heading}>
                Фото
            </span>
            <ImagesLoader/>
            <span className={style.heading}>
                Описание
            </span>
            <Title/>
            <Info/>
            <WhatToExpect/>
            <span className={style.heading}>
                Условия проведения
            </span>
            <OrgDetails/>
            <MeetingPlace/>
            <Topics/>
            <Places/>
            {width < 1024 && <SubmitButton orientation={Orientation.HORIZONTAL}/>}
        </div>
    )
}