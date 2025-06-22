import {IIsDisabled, ISlot} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class SlotStore implements IIsDisabled {

    private _slots: ISlot[] = []
    private _isSubmitted: boolean = false
    private _current: ISlot = {
        id: 0,
        date: undefined,
        time: "",
        groupCapacity: 0,
        freeSeats: 0,
        tourId: 0
    }

    constructor(slots: ISlot[] = []) {
        this._slots = slots
        makeAutoObservable(this)
    }

    get isCurrentDisabled(): boolean {

        const { date, time, groupCapacity } = this._current;

        const isEmpty = !date || time.trim() === "" || groupCapacity <= 0

        const isDuplicate = this._slots.some(slot =>
            slot.date?.toISOString() === date?.toISOString() && slot.time === time
        )

        return isEmpty || isDuplicate

    }

    get isDisabled(): boolean {
        return this._slots.length === 0
    }

    get current(): ISlot {
        return this._current
    }

    get isSubmitted(): boolean {
        return this._isSubmitted;
    }

    set isSubmitted(value: boolean) {
        this._isSubmitted = value;
    }

    get slots(): ISlot[] {
        return this._slots
    }

    add(slot: ISlot) {
        this._slots.push(slot)
    }

    addNewSlot(tourId: number) {

        this._current.id = Date.now()
        this._current.freeSeats = this._current.groupCapacity
        this._current.tourId = tourId

        this._slots.push({...this._current})
        this.resetCurrent()

    }

    delete(id: number) {
        this._slots = this._slots.filter(slot => slot.id !== id)
    }

    resetCurrent() {
        this._current = {
            id: 0,
            date: undefined,
            time: "",
            groupCapacity: 0,
            freeSeats: 0,
            tourId: 0,
        }
    }

}