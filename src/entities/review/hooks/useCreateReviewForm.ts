import {ITour, TourAccessibility} from "@/shared/types";
import {useState} from "react";
import {useMe} from "@/features";
import {useCreateReview} from "@/entities";

type Result = {
    completed: boolean
    positive: string
    negative: string
    rating: number
    updateRating: (value: number) => void
    updateNegative: (value: string) => void
    updatePositive: (value: string) => void
    save: () => void
}

export const useCreateReviewForm = (tour: ITour): Result => {

    const {me} = useMe()
    const {mutate: create} = useCreateReview()

    const [positive, setPositive] = useState<string>("")
    const [negative, setNegative] = useState<string>("")
    const [rating, setRating] = useState<number>(0)

    const save = () => create({
        id: Number(Date.now()),
        tourId: tour.id,
        name: me.name,
        rating: rating,
        negativeText: negative,
        positiveText: positive,
        withChildren: tour.accessibility === TourAccessibility.WITH_CHILDREN,
        personCount: tour.groupCapacity
    })

    return {
        completed: Boolean(positive) && Boolean(negative) && rating > 0,
        positive, negative, rating,
        updateRating: setRating,
        updateNegative: setNegative,
        updatePositive: setPositive,
        save
    }

}