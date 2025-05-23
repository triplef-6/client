import {IDuration, IIsDisabled, ITime, ISingleDate} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class TimeStore implements ITime, ISingleDate, IDuration, IIsDisabled {

    private _date: Date | undefined
    private _duration: number
    private _time: string

    constructor(date: Date | undefined = undefined, duration: number = 0, time: string = "") {

        this._date = date
        this._duration = duration
        this._time = time

        makeAutoObservable(this)

    }

    get isDisabled(): boolean {
        return (
            this._duration > 0 &&
            this._date !== undefined &&
            !!this._time
        )
    }

    get date(): Date | undefined {
        return this._date;
    }

    set date(value: Date | undefined) {
        this._date = value;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

}