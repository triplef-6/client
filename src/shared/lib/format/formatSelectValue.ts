import {sortTypesArray} from "@/shared/config";

export const formatSelectValue = (value: string) => {
    return sortTypesArray.find(field => field.value === value)?.label as string
}