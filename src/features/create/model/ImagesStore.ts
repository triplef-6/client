import {IImages, IIsDisabled, ImagesType} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class ImagesStore implements IImages, IIsDisabled {

    private _images: ImagesType

    constructor(images: ImagesType = Array(5).fill(null)) {
        this._images = images
        makeAutoObservable(this)
    }

    get isDisabled(): boolean {
        return (
            this._images.length > 0 &&
            this._images.every((img) => img !== null && img !== undefined)
        )
    }

    get count(): number {
        return this._images.filter(img => img !== null).length
    }


    get images(): ImagesType {
        return this._images;
    }

    set images(value: ImagesType) {
        this._images = value;
    }

}