import {IIsDisabled, IPrice} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class PriceStore implements IPrice, IIsDisabled {

    private _price: number
    private _priceForPerson: number

    constructor(price: number = 0, priceForPerson: number = 0) {

        this._price = price
        this._priceForPerson = priceForPerson

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        return this._price > 0 && this._priceForPerson > 0
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