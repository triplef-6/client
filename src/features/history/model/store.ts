import {ITour} from "@/shared/types";
import {makeAutoObservable} from "mobx";
import {StorageKeys} from "@/features/history/types";

class TourLocalHistoryStore {

    private _favourites: ITour[] = []
    private _viewed: ITour[] = []
    private _tags: string[] = []
    private _isFirstLoad: boolean = true

    constructor() {
        makeAutoObservable(this)
        this.loadFromStorage()
    }

    private loadFromStorage() {
        this._favourites = JSON.parse(localStorage.getItem(StorageKeys.FAVOURITES) || "[]")
        this._viewed = JSON.parse(localStorage.getItem(StorageKeys.VIEWED) || "[]")
        this._isFirstLoad = JSON.parse(localStorage.getItem(StorageKeys.IS_FIRST_LOADED) ?? "true")
    }

    private saveFavouritesToStorage() {
        localStorage.setItem(StorageKeys.FAVOURITES, JSON.stringify(this.favourites))
    }

    private saveViewedToStorage() {
        localStorage.setItem(StorageKeys.VIEWED, JSON.stringify(this.viewed))
    }

    private saveIsFirstLoadToStorage() {
        localStorage.setItem(StorageKeys.IS_FIRST_LOADED, JSON.stringify(this.isFirstLoad))
    }

    get favourites(): ITour[] {
        return this._favourites
    }

    get viewed(): ITour[] {
        return this._viewed
    }

    get tags(): string[] {
        return this._tags;
    }

    get isFirstLoad(): boolean {
        return this._isFirstLoad;
    }

    addToFav(tour: ITour) {
        if (!this.favourites.some((fav) => fav.id === tour.id)) {
            this.favourites.push(tour)
            this.saveFavouritesToStorage()
        }
    }

    deleteFromFav(tour: ITour) {
        this._favourites = this.favourites.filter((fav) => fav.id !== tour.id)
        this.saveFavouritesToStorage()
    }

    addToViewed(tour: ITour) {
        if (!this.viewed.some((viewedTour) => viewedTour.id === tour.id)) {
            this.viewed.push(tour)
            this.saveViewedToStorage()
        }
    }

    visit() {
        if (this.isFirstLoad) {
            this._isFirstLoad = false
            this.saveIsFirstLoadToStorage()
        }
    }

    get tagsCount(): number {
        return this._tags.length
    }

    addTag(value: string) {
        if (!this._tags.includes(value)) this._tags.push(value)
    }

    removeTag(value: string) {
        this._tags = this._tags.filter(i => i !== value)
    }

    clearTags() {
        this._tags = []
    }

    clearFavourites() {
        this._favourites = []
    }

}

export const tourLocalHistoryStore = new TourLocalHistoryStore()