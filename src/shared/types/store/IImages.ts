import {ImagesType} from "@/shared/types";

export interface IImages {
    get images(): ImagesType
    set images(value: ImagesType)
    get count(): number
}