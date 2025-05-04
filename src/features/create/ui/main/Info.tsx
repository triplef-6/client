import {FC} from "react";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {cn} from "@/app/lib";
import style from "@/features/create/ui/main/style.module.css";
import {Textarea} from "@/shared/ui";
import {observer} from "mobx-react-lite";
import {useTourDesc} from "@/features/create/hooks";

export const Info: FC = observer(() => {

    const {
        value,
        state,
        focus, blur, textareaClick
    } = useTourDesc(store.description, "info")

    const {isSubmitted} = useSubmitted(store)

    return (
        <div className={cn(
            "flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0",
            isSubmitted && !value && "border border-secondary-red"
        )}>
            <span className={style.smHeading}>
                Основная информация:
            </span>
            <p className={style.text}>
                Расскажите, о чём ваша экскурсия. Опишите её суть и главные впечатления,
                которые получат путешественники.
            </p>
            <Textarea
                defaultValue={value}
                isOpen={state.isOpen}
                isSubmitted={isSubmitted}
                value={value}
                onChangeCapture={textareaClick}
                onFocus={focus}
                onBlur={blur}
            />
        </div>
    );
})