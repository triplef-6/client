import {IImages, ImagesType} from "@/shared/types";
import {useEffect, useState} from "react";
import {validateImage} from "@/shared/validate";

type ReturnType = {
    value: ImagesType
    update: (index: number, file: File | null) => void
    isError: boolean
    count: number
}

export const useImagesLoader = (store: IImages, isSubmitted: boolean): ReturnType => {

    const [isError, setIsError] = useState<boolean>(false)
    const [count, setCount] = useState<number>(store.count)

    useEffect(() => {
        if (isSubmitted) setIsError(store.images.includes(null))
    }, [isSubmitted, store.images])

    const update = (index: number, file: File | null) => {

        if (file !== null && !validateImage(file)) {
            setIsError(true)
            return;
        }
        setIsError(false)

        const temp = [...store.images]
        temp[index] = file
        store.images = temp

        setCount(store.images.filter((i): i is File => i !== null).length)

        if (isSubmitted) setIsError(store.images.includes(null))

        console.log(isError)

    }

    return {
        value: store.images,
        update: update,
        isError,
        count
    }

}