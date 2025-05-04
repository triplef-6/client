import {ITour} from "@/shared/types";
import {tourLocalHistoryStore as store} from "@/features";

export const useAddViewFactory = (): (tour: ITour) => void => {
    return (tour: ITour) => store.addToViewed(tour)
}