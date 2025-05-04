import {SelectValuesType, TourAccessibility} from "@/shared/types";

export const accessibilityValues: SelectValuesType[] = [
    {value: TourAccessibility.WITH_CHILDREN, label: "Можно с детьми"},
    {value: TourAccessibility.WITHOUT_CHILDREN, label: "Без детей"}
]