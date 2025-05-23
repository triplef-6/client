import {IIsDisabled, ITags} from "@/shared/types";
import {action, makeObservable, observable} from "mobx";

export class TagsStore implements ITags, IIsDisabled {

    tags: string[]

    constructor(tags: string[] = []) {

        this.tags = tags

        makeObservable(this, {
            tags: observable,
            add: action,
            remove: action,
            clear: action
        })

    }

    get isDisabled(): boolean {
        return this.tags.length > 0
    }

    add(value: string) {
        if (!this.tags.includes(value)) this.tags.push(value)
    }

    remove(value: string) {
        this.tags = this.tags.filter(i => i !== value)
    }

    clear() {
        this.tags = []
    }

}