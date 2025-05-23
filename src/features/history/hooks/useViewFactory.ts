import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {tourLocalHistoryStore as store} from "@/features";

export const useViewFactory = () : ITour[] => {
    const local = store.viewed
    return useMemo(() => local, [local])
}