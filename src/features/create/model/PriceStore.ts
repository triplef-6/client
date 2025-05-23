import {IGroupCapacity, IIsDisabled, IPrice, ITourFormat, TourFormat} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class PriceStore implements IPrice, ITourFormat, IGroupCapacity, IIsDisabled {

    private _format: string
    private _price: number
    private _priceForPerson: number
    private _groupCapacity: number

    constructor(format: string = "", price: number = 0, priceForPerson: number = 0, groupCapacity: number = 0) {

        this._format = format
        this._price = price
        this._priceForPerson = priceForPerson
        this._groupCapacity = groupCapacity

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {

        if (this._format === TourFormat.INDIVIDUAL) {
            return this._priceForPerson > 0
        }

        if (this._format === TourFormat.GROUP) {
            return this._price > 0 && this._priceForPerson > 0 && this._groupCapacity > 0
        }

        return false

    }

    get format(): string {
        return this._format;
    }

    set format(value: string) {
        if (value === TourFormat.INDIVIDUAL) this.groupCapacity = 1
        this._format = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get priceForPerson(): number {
        return this._priceForPerson;
    }

    set priceForPerson(value: number) {
        this._priceForPerson = value;
    }

    get groupCapacity(): number {
        return this._groupCapacity;
    }

    set groupCapacity(value: number) {
        this._groupCapacity = value;
    }

}