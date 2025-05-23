import {BaseStore} from "@/shared/lib";
import {SearchParamsStore} from "@/features/search/model/SearchParamsStore.ts";
import {safeGet} from "@/shared/utils";

class SearchTourStore extends BaseStore {

    searchParams = new SearchParamsStore()

    constructor() {
        super();
    }

    get isDisabled(): boolean {
        return !!safeGet(() => this.searchParams.location.city, "")
            && !!this.searchParams.date.from
            && !!this.searchParams.date.to
            && !!this.searchParams.accessibility
    }

}

export const searchTourStore = new SearchTourStore()