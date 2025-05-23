import {makeObservable, observable} from "mobx";
import {IIsDisabled, ISubmitted} from "@/shared/types";

export abstract class BaseStore implements ISubmitted, IIsDisabled {

    isSubmitted: boolean = false

    protected constructor() {
        makeObservable(this, {
            isSubmitted: observable
        })
    }

    abstract get isDisabled(): boolean

}