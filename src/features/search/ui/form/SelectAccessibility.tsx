import {Select, SelectAccessibilityTrigger, SelectContent, SelectItem} from "@/shared/ui";
import {observer} from "mobx-react-lite";
import {accessibilityValues as values} from "@/shared/config";
import {useSearchSelect, useSubmitted} from "@/shared/hooks";
import {searchTourStore as store} from "@/features";

export const SelectAccessibility = observer(() => {

    const {
        state,
        focus, setValue
    } = useSearchSelect(store.searchParams, "accessibility", values)

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