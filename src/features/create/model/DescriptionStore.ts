import {
    IDescription,
    IInfo,
    IIsDisabled,
    IMeetingPlace,
    IOrgDetails,
    IPlaces,
    ITopics,
    IWhatToExpect
} from "@/shared/types";
import {makeAutoObservable} from "mobx";

interface IStore extends ITopics, IInfo, IWhatToExpect, IOrgDetails, IMeetingPlace, IPlaces, IIsDisabled {}

export class DescriptionStore implements IStore {

    private _description: IDescription

    constructor(initial?: Partial<IDescription>) {

        this._description = {
            info: "",
            whatToExpect: "",
            places: [""],
            topics: [""],
            orgDetails: "",
            meetingPlace: "",
            ...initial
        }

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        return !!(
            this._description.info.trim() &&
            this._description.whatToExpect.trim() &&
            this._description.orgDetails.trim() &&
            this._description.meetingPlace.trim() &&
            this._description.topics.length > 0 &&
            this._description.places.length > 0
        )
    }

    get info(): string {
        return this._description.info
    }

    set info(value: string) {
        this._description.info = value
    }

    get whatToExpect(): string {
        return this._description.whatToExpect
    }

    set whatToExpect(value: string) {
        this._description.whatToExpect = value
    }

    get orgDetails(): string {
        return this._description.orgDetails
    }

    set orgDetails(value: string) {
        this._description.orgDetails = value
    }

    get meetingPlace(): string {
        return this._description.meetingPlace
    }

    set meetingPlace(value: string) {
        this._description.meetingPlace = value
    }

    get topics(): string[] {
        return this._description.topics
    }

    set topics(value: string[]) {
        this._description.topics = value
    }

    get places(): string[] {
        return this._description.places
    }

    set places(value: string[]) {
        this._description.places = value
    }

}