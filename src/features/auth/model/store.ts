import {makeAutoObservable} from "mobx";

const STORAGE_KEY = "isLoginAllowed"

class AuthStore {

    isAuth: boolean = false
    private _isLoginAllowed: boolean = true

    constructor() {
        makeAutoObservable(this)
        this.loadFromStorage()
    }

    private loadFromStorage() {
        this._isLoginAllowed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "true")
    }

    private saveAllowedToStorage() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._isLoginAllowed))
    }

    login() {
        this.isAuth = true
    }

    logout() {
        this.isAuth = false
        this._isLoginAllowed = false
        this.saveAllowedToStorage()
    }

    allowedLogin() {
        this._isLoginAllowed = true
        this.saveAllowedToStorage()
    }

    get isLoginAllowed(): boolean {
        return this._isLoginAllowed;
    }

}

export const authStore = new AuthStore()