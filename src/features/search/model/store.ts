import {BaseStore} from "@/shared/lib";
import {SearchParamsStore} from "@/features/search/model/SearchParamsStore.ts";

class SearchTourStore extends BaseStore {

    searchParams = new SearchParamsStore()

    constructor() {
        super();
    }

    get isDisabled(): boolean {
        return !!this.searchParams.location.city
            && !!this.searchParams.date.from
            && !!this.searchParams.date.to
            && !!this.searchParams.accessibility
    }

}

export const searchTourStore = new SearchTourStore()