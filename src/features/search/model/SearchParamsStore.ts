import {makeAutoObservable} from "mobx";
import {
    IAccessibility,
    IByCity,
    ILocation,
    ILocationTour,
    ISort,
    RangeType,
    SearchParamsType,
    SortValues, IDate
} from "@/shared/types";
import {safeGet} from "@/shared/utils";

export class SearchParamsStore implements ILocationTour, IDate, IAccessibility, IByCity, ISort {

    _sort: string = SortValues.FOR_CHEAP
    _searchParams: SearchParamsType = {
        location: {
            id: 0,
            city: "",
            country: "",
            tourCount: 0,
            region: "",
            image: ""
        },
        date: {
            from: undefined,
            to: undefined
        },
        accessibility: "",
        byCity: false
    }

    constructor() {
        makeAutoObservable(this)
        this.loadFromStorage()
    }

    private loadFromStorage() {
        const saved = localStorage.getItem("searchParams")
        if (saved) {
            const parsed: SearchParamsType = JSON.parse(saved)
            if (parsed.date) {
                parsed.date.from = parsed.date.from ? new Date(parsed.date.from) : undefined
                parsed.date.to = parsed.date.to ? new Date(parsed.date.to) : undefined
            }
            this._searchParams = parsed
        }
    }

    private saveToStorage() {
        localStorage.setItem("searchParams", JSON.stringify(this._searchParams))
    }

    private updateParams(params: Partial<SearchParamsType>) {
        this._searchParams = { ...this._searchParams, ...params }
        this.saveToStorage()
    }

    clearLocation() {
        this.location = {
            id: 0,
            city: "",
            country: "",
            tourCount: 0,
            region: "",
            image: ""
        }
    }

    get searchParams(): SearchParamsType {
        return this._searchParams
    }

    get location(): ILocation {
        return this._searchParams.location;
    }

    get city(): string {
        return safeGet(() => this._searchParams.location.city, "")
    }

    set location(value: ILocation) {
        this.updateParams({ location: value })
    }

    get date(): RangeType {
        return this._searchParams.date
    }

    set date(value: RangeType) {
        this.updateParams({ date: value })
    }

    get accessibility(): string {
        return this._searchParams.accessibility
    }

    set accessibility(accessibility: string) {
        this.updateParams({ accessibility })
    }

    get byCity(): boolean {
        return this._searchParams.byCity
    }

    set byCity(byCity: boolean) {
        this.updateParams({ byCity })
    }

    get sort(): string {
        return this._sort
    }

    set sort(sort: string) {
        this._sort = sort
    }

}