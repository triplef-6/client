import {ITour} from "@/shared/types";

export const searchTourByRegion = (tours: ITour[], byRegion: boolean) : ITour[] => {
    return tours.filter(tour => tour.byCity === byRegion)
}