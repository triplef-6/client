import {IReview} from "@/shared/types";
import {useState} from "react";
import {useUpdateReview} from "@/entities";

type Result = {
    isPending: boolean
    isPaused: boolean
    completed: boolean
    positive: string
    negative: string
    rating: number
    updateRating: (value: number) => void
    updateNegative: (value: string) => void
    updatePositive: (value: string) => void
    save: () => void
}

export const useUpdateReviewForm = (review: IReview): Result => {

    const {
        mutate: update,
        isPending,
        isPaused
    } = useUpdateReview()

    const [positive, setPositive] = useState<string>(review.positiveText)
    const [negative, setNegative] = useState<string>(review.negativeText)
    const [rating, setRating] = useState<number>(review.rating)

    const save = () => update({
        id: review.id,
        name: review.name,
        withChildren: review.withChildren,
        personCount: review.personCount,
        tourId: review.tourId,
        negativeText: negative,
        positiveText: positive,
        rating: rating
    })

    return {
        completed: Boolean(review.negativeText) && Boolean(review.positiveText) && review.rating !== 0,
        positive, negative, rating, isPaused, isPending,
        updateRating: setRating,
        updateNegative: setNegative,
        updatePositive: setPositive,
        save
    }

}