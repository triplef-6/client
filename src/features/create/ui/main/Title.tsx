import {FC} from "react";
import style from "./style.module.css"
import {TextInput} from "@/shared/ui";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {cn} from "@/app/lib";
import {observer} from "mobx-react-lite";
import {useTitle} from "@/features/create/hooks";

export const Title: FC = observer(() => {

    const {
        value,
        state,
        focus, blur, click
    } = useTitle(store.params)
    const {isSubmitted} = useSubmitted(store)

    return (
        <div className={cn(
            "flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0",
            isSubmitted && !value && "border border-secondary-red"
        )}>
            <span className={style.smHeading}>
                Название экскурсии:
            </span>
            <p className={style.text}>
                Придумайте название, чтобы путешественники поняли что вы предлагаете.
                Будет здорово, если удастся отразить в нём особенность предложения.
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