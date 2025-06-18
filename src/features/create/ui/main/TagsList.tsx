import {FC} from "react";
import style from "./style.module.css"
import {Tag} from "@/entities";
import {useSubmitted, useTagsList} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {cn} from "@/app/lib";
import {observer} from "mobx-react-lite";
import {AppSkeleton} from "@/shared/ui";

export const TagsList: FC = observer(() => {

    const {
        value,
        visible,
        isError,
        isLoading,
        isPlaceholderData,
        add, remove
    } = useTagsList(store.tags)

    const {isSubmitted} = useSubmitted(store)

    return (
        <div className={cn(
            "flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0",
            isError && isSubmitted && "border border-secondary-red"
        )}>
            <span className={style.smHeading}>Темы экскурсии:</span>
            <p className={style.text}>
                Какие темы вы затронете? История, архитектура, местные легенды или гастрономия?
                Укажите основные направления.
            </p>
            {
                isLoading || isPlaceholderData
                    ?
                    <AppSkeleton/>
                    :
                    <div className={style.tags}>
                        {visible.map((tag, i) => (
                            <Tag
                                key={i}
                                tag={tag}
                                add={add}
                                remove={remove}
                                value={value}
                                variant={"outline"}
                            />
                        ))}
                    </div>
            }
        </div>
    );
})