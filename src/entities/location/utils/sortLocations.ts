import {ILocation} from "@/shared/types";

export const sortLocations = (locations: ILocation[]) => {
    return locations.sort((a, b) => b.tourCount - a.tourCount).slice(0, 4)
}