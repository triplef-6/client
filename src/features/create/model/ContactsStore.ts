import {IContact, IContacts, IIsDisabled} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class ContactsStore implements IContact, IIsDisabled {

    private _contacts: IContacts

    constructor(initial?: Partial<IContacts>) {

        this._contacts = {
            vk: "",
            telegram: "",
            phone: "",
            ...initial
        }

        makeAutoObservable(this)

    }

    private updateContactParams(contacts: Partial<IContacts>) {
        this._contacts = { ...this._contacts, ...contacts }
    }

    get isDisabled(): boolean {
        return this._contacts.phone.trim().length === 0
    }

    get vk(): string {
        return this._contacts.vk || ""
    }

    set vk(vk: string) {
        this.updateContactParams({vk})
    }

    get telegram(): string {
        return this._contacts.telegram || ""
    }

    set telegram(telegram: string) {
        this.updateContactParams({telegram})
    }

    get phone(): string {
        return this._contacts.phone
    }

    set phone(phone: string) {
        this.updateContactParams({phone})
    }

}