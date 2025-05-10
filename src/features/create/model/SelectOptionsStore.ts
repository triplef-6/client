import {IAccessibility, IIsDisabled, ITourFormatBehavior} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class SelectOptionsStore implements IAccessibility, ITourFormatBehavior, IIsDisabled {

    private _accessibility: string
    private _formatBehavior: string

    constructor(accessibility: string = "", formatBehavior: string = "") {
        this._accessibility = accessibility
        this._formatBehavior = formatBehavior
        makeAutoObservable(this)
    }

    get isDisabled(): boolean {
        return !!(this._accessibility.trim() && this._formatBehavior.trim())
    }

    get accessibility(): string {
        return this._accessibility;
    }

    set accessibility(value: string) {
        this._accessibility = value;
    }

    get formatBehavior(): string {
        return this._formatBehavior;
    }

    set formatBehavior(value: string) {
        this._formatBehavior = value;
    }

}