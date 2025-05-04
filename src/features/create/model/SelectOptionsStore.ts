import {
    IAccessibility,
    IGroupCapacity,
    IIsDisabled,
    ITourFormat,
    ITourFormatBehavior,
    TourFormat
} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class SelectOptionsStore implements IAccessibility, IGroupCapacity, ITourFormat, ITourFormatBehavior, IIsDisabled {

    private _accessibility: string
    private _format: string
    private _formatBehavior: string
    private _groupCapacity: number

    constructor(accessibility: string = "", format: string = "", formatBehavior: string = "", groupCapacity: number = 0) {

        this._accessibility = accessibility
        this._format = format
        this._formatBehavior = formatBehavior
        this._groupCapacity = groupCapacity

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        return !!(
            this._accessibility.trim() &&
            this._format.trim() &&
            this._formatBehavior.trim() &&
            this._groupCapacity > 0
        )
    }

    get accessibility(): string {
        return this._accessibility;
    }

    set accessibility(value: string) {
        this._accessibility = value;
    }

    get format(): string {
        return this._format;
    }

    set format(value: string) {
        if (value === TourFormat.INDIVIDUAL) this.groupCapacity = 1
        this._format = value;
    }

    get formatBehavior(): string {
        return this._formatBehavior;
    }

    set formatBehavior(value: string) {
        this._formatBehavior = value;
    }

    get groupCapacity(): number {
        return this._groupCapacity;
    }

    set groupCapacity(value: number) {
        this._groupCapacity = value;
    }

}