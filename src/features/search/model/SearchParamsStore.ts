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
        if (saved) this._searchParams = JSON.parse(saved)
    }

    private saveToStorage() {
        localStorage.setItem("searchParams", JSON.stringify(this._searchParams))
    }

    private updateParams(params: Partial<SearchParamsType>) {
        this._searchParams = { ...this._searchParams, ...params }
        this.saveToStorage()
    }

    get searchParams(): SearchParamsType {
        return this._searchParams
    }

    get location(): ILocation {
        return this._searchParams.location;
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