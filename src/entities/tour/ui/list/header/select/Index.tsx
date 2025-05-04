import {FC} from 'react';
import {Select, SelectContent, SelectItem, SelectSortTrigger} from "@/shared/ui";
import {sortTypesArray as values} from "@/shared/config";
import {useSearchSelect} from "@/shared/hooks";
import {searchTourStore} from "@/features";
import {formatSelectValue} from "@/shared/utills";
import {observer} from "mobx-react-lite";

export const Index: FC = observer(() => {

    const {
        state,
        setValue
    } = useSearchSelect(searchTourStore.searchParams, "sort", values)

    return (
        <Select value={state.value} onValueChange={setValue}>
            <SelectSortTrigger
                role={"button"}
                value={state.value}
                placeholder={formatSelectValue(state.value)}
            />
            <SelectContent side={"bottom"}>
                {values.map((tour) =>
                    <SelectItem key={tour.value} value={String(tour.value)}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );

})