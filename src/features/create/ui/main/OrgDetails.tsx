import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {cn} from "@/app/lib";
import style from "@/features/create/ui/main/style.module.css";
import {TextInput} from "@/shared/ui";
import {useTourDesc} from "@/features/create/hooks";

export const OrgDetails: FC = observer(() => {

    const {
        value,
        state,
        focus, blur, click
    } = useTourDesc(store.description, "orgDetails")

    const {isSubmitted} = useSubmitted(store)

    return (
        <div className={cn(
            "flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0",
            isSubmitted && !value && "border border-secondary-red"
        )}>
            <span className={style.smHeading}>
                Организационные детали:
            </span>
            <p className={style.text}>
                Здесь можно указать важные нюансы: нужна ли специальная одежда,
                возможны ли дополнительные расходы, есть ли ограничения.
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