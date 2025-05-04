import {Select, SelectAccessibilityTrigger, SelectContent, SelectItem} from "@/shared/ui";
import {accessibilityValues as values} from "@/shared/config";
import {useSubmitted} from "@/shared/hooks";
import {observer} from "mobx-react-lite";

import {createTourStore as store} from "@/features/create/model";
import {useSelect} from "@/features/create/hooks";

export const Accessibility = observer(() => {

    const {state, focus, setValue} = useSelect(store.selectOptions, "accessibility", values)
    const {isSubmitted} = useSubmitted(store)

    return (
        <Select value={state.value} onValueChange={setValue}>
            <SelectAccessibilityTrigger
                isSearch={isSubmitted}
                value={state.value}
                isTouched={state.isTouched}
                onFocus={focus}
            />
            <SelectContent side={"bottom"}>
                {values.map((tour) =>
                    <SelectItem key={tour.value} value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
})