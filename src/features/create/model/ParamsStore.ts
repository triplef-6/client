import {makeAutoObservable} from "mobx";
import {IContributorId, IIsDisabled, ITitle} from "@/shared/types";

export class ParamsStore implements IContributorId, ITitle, IIsDisabled {

    private _title: string
    private _contributorId: number

    constructor(title: string = "", contributorId: number = 0) {

        this._title = title
        this._contributorId = contributorId

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        return !!this._title.trim()
    }

    get contributorId(): number {
        return this._contributorId;
    }

    set contributorId(value: number) {
        this._contributorId = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

}