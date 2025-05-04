import {SortValues} from "@/shared/types/features";
import {SelectValuesType} from "@/shared/types";

export const sortTypesArray: SelectValuesType[] = [
    {value: SortValues.FOR_POPULAR, label: "По популярности"},
    {value: SortValues.FOR_CHEAP, label: "Сначала дешевые"},
    {value: SortValues.FOR_EXPENSIVE, label: "Сначала дорогие"},
    {value: SortValues.FOR_RATING, label: "По рейтингу"}
]