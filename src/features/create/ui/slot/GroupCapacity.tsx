import {FC} from "react";
import {Slider} from "@/shared/ui";
import {createTourStore as store} from "@/features/create/model";
import {formatPeople} from "@/shared/lib/format";
import {cn} from "@/app/lib";
import {observer} from "mobx-react-lite";
import {useGroupCapacity, useTourFormat, useSubmitted} from "@/features/create/hooks";
import {tourFormatValues as values} from "@/shared/config";
import {TourFormat} from "@/shared/types";

export const GroupCapacity: FC = observer(() => {

    const {state: format} = useTourFormat(store.price, values)
    const {state, isError, update} = useGroupCapacity()
    const isSubmitted = useSubmitted()

    if (format.value === TourFormat.INDIVIDUAL) return null

    return (
        <div className={"flex flex-col gap-2 py-2"}>
            <div
                className={cn(
                    "flex flex-row gap-1 text-sm",
                    isError && isSubmitted ? "text-secondary-red" : "text-grayscale-500"
                )}
            >
                <span>Размер группы</span>
                <span className={"font-medium"}>{formatPeople(state)}</span>
            </div>
            <Slider
                value={[state]}
                onValueChange={update}
                defaultValue={[1]}
                max={52}
                step={1}
            />
        </div>
    );
})