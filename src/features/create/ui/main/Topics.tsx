import {FC} from "react";
import {cn} from "@/app/lib";
import style from "@/features/create/ui/main/style.module.css";
import {TextInput} from "@/shared/ui";
import {Minus, Plus} from "lucide-react";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {observer} from "mobx-react-lite";
import {useTourDescList} from "@/features/create/hooks";

export const Topics: FC = observer(() => {

    const {
        value,
        state,
        blur, focus, addItem, removeItem, updateItem
    } = useTourDescList(store.description, "topics")

    const {isSubmitted} = useSubmitted(store)

    return (
        <div
            className={cn(
                "flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0",
                isSubmitted && !value && "border border-secondary-red"
            )}
        >
            <span className={style.smHeading}>
                Темы, которые будут обсуждаться:
            </span>
            <p className={style.text}>
                Расскажите, о чём ваша экскурсия. Опишите её суть и главные впечатления,
                которые получат путешественники.
            </p>
            <div className={style.fields}>
                {value.map((topic, index) => (
                    <TextInput
                        defaultValue={topic}
                        key={index}
                        isOpen={state.isOpen}
                        isSubmitted={isSubmitted}
                        value={topic}
                        onChange={(e) => updateItem(index, e.target.value)}
                        onFocus={focus}
                        onBlur={() => blur(index)}
                    />
                ))}
                <div className={style.buttons}>
                    <button>
                        <Plus
                            onClick={addItem}
                            width={32}
                            height={32}
                            className={"text-grayscale-350"}
                        />
                    </button>
                    {
                        value.length > 1 &&
                        <button>
                            <Minus
                                onClick={removeItem}
                                width={32}
                                height={32}
                                className={"text-grayscale-350"}
                            />
                        </button>
                    }
                </div>
            </div>
        </div>
    );
})