import {IIsDisabled, IPrice, ITourFormat, TourFormat} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class PriceStore implements IPrice, ITourFormat, IIsDisabled {

    private _format: string
    private _price: number
    private _priceForPerson: number

    constructor(format: string = "", price: number = 0, priceForPerson: number = 0) {

        this._format = format
        this._price = price
        this._priceForPerson = priceForPerson

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        if (this._format === TourFormat.INDIVIDUAL) return this._priceForPerson === 0
        return this._price === 0 || this._priceForPerson === 0
    }

    get format(): string {
        return this._format;
    }

    set format(value: string) {
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

}