import {FC} from "react";
import style from "./style.module.css"
import {TextInput} from "@/shared/ui";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {cn} from "@/app/lib";
import {observer} from "mobx-react-lite";
import {useTourDesc} from "@/features/create/hooks";

export const WhatToExpect: FC = observer(() => {

    const {
        value,
        state,
        focus, blur, click
    } = useTourDesc(store.description, "whatToExpect")

    const {isSubmitted} = useSubmitted(store)

    return (
        <div className={cn(
            "flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0",
            isSubmitted && !value && "border border-secondary-red"
        )}>
            <span className={style.smHeading}>
                Что ожидать:
            </span>
            <p className={style.text}>
                Опишите, какие эмоции и открытия ждут участников.
                Будет ли это неспешная прогулка, насыщенный маршрут или интерактивное приключение?
            </p>
            <TextInput
                defaultValue={value}
                isOpen={state.isOpen}
                isSubmitted={isSubmitted}
                value={value}
                onChangeCapture={click}
                onFocus={focus}
                onBlur={blur}
            />
        </div>
    );
})