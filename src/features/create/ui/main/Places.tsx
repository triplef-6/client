import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {cn} from "@/app/lib";
import style from "@/features/create/ui/main/style.module.css";
import {TextInput} from "@/shared/ui";
import {Minus, Plus} from "lucide-react";
import {useTourDescList} from "@/features/create/hooks";

export const Places: FC = observer(() => {

    const {
        value,
        state,
        blur, focus, addItem, removeItem, updateItem
    } = useTourDescList(store.description, "places")

    const {isSubmitted} = useSubmitted(store)

    return (
        <div
            className={cn(
                "flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0",
                isSubmitted && !value && "border border-secondary-red"
            )}
        >
            <span className={style.smHeading}>
                Места, которые вы посетите:
            </span>
            <p className={style.text}>
                Укажите, в каких местах будет проходить экскурсия экскурсия.
                Это может быть конкретный адрес, известная достопримечательность или удобное место для сбора группы.
            </p>
            <div className={style.fields}>
                {value.map((place, index) => (
                    <TextInput
                        defaultValue={place}
                        key={index}
                        isOpen={state.isOpen}
                        isSubmitted={isSubmitted}
                        value={place}
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