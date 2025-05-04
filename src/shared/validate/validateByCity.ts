import {ILocation} from "@/shared/types";

export const validateByCity = (value: string, locations: ILocation[]): boolean => {
    return locations.some(
        location => location.city.toLowerCase() === value.toLowerCase() ||
            location.city.toLowerCase().startsWith(value.toLowerCase())
    )
}