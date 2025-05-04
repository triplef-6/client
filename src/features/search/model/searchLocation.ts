import {ILocation} from "@/shared/types";

export const searchLocation = (location: string, array: ILocation[]): string[] => {
    return location.length === 0
        ? []
        : array
            .filter(i => i.city.toUpperCase().startsWith(location.toUpperCase()))
            .map(i => i.city)
}