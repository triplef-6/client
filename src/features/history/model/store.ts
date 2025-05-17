import {ITour} from "@/shared/types";
import {makeAutoObservable} from "mobx";

class TourLocalHistoryStore {

    private _favourites: ITour[] = []
    private _viewed: ITour[] = []
    private _tags: string[] = []

    constructor() {
        makeAutoObservable(this)
        this.loadFromStorage()
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

    private loadFromStorage() {
        this._favourites = JSON.parse(localStorage.getItem("favourites") || "[]")
        this._viewed = JSON.parse(localStorage.getItem("viewed") || "[]")
    }

    private saveFavouritesToStorage() {
        localStorage.setItem("favourites", JSON.stringify(this.favourites));
    }

    private saveViewedToStorage() {
        localStorage.setItem("viewed", JSON.stringify(this.viewed));
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

}

export const tourLocalHistoryStore = new TourLocalHistoryStore()