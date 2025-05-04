import {Select, SelectContent, SelectItem, SelectTourFormatBehaviorTrigger} from "@/shared/ui";
import {tourFormatBehaviorValues as values} from "@/shared/config";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {observer} from "mobx-react-lite";
import {useSelect} from "@/features/create/hooks";

export const FormatBehavior = observer(() => {

    const {state, focus, setValue} = useSelect(store.selectOptions, "formatBehavior", values)
    const {isSubmitted} = useSubmitted(store)

    return (
        <Select value={state.value} onValueChange={setValue}>
            <SelectTourFormatBehaviorTrigger
                isSearch={isSubmitted}
                value={state.value}
                isTouched={state.isTouched}
                onFocus={focus}
            />
            <SelectContent className={"h-40"} side={"bottom"}>
                {values.map((tour) =>
                    <SelectItem key={tour.value} value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
})