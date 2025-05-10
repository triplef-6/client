import {Select, SelectContent, SelectItem, SelectTourFormatTrigger} from "@/shared/ui";
import {tourFormatValues as values} from "@/shared/config";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {observer} from "mobx-react-lite";
import {useTourFormat} from "@/features/create/hooks";

export const Format = observer(() => {

    const {state, focus, setValue} = useTourFormat(store.price, values)
    const {isSubmitted} = useSubmitted(store)

    return (
        <Select value={state.value} onValueChange={setValue}>
            <SelectTourFormatTrigger
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