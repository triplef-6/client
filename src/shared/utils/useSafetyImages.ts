import {useMemo} from "react";

type ReturnType = {
    safetyImages: string[]
    isEmpty: boolean
}

export const useSafetyImages = (images: (string | File | null)[]): ReturnType => {

    const safetyImages = useMemo(() => {
        return images
            .filter((img): img is string | File => img !== null)
            .map((img) => {
                if (typeof img === "string") return img
                return URL.createObjectURL(img)
            });
    }, [images])

    return {
        safetyImages,
        isEmpty: safetyImages.length === 0
    }

}