import {IReview} from "@/shared/types";
import {useCallback, useEffect, useState} from "react";
import {useUpdateReview} from "@/entities";

type Result = {
    completed: boolean
    review: IReview
    updateRating: (value: number) => void
    updateNegative: (value: string) => void
    updatePositive: (value: string) => void
    save: () => void
}

export const useUpdateReviewForm = (prev: IReview): Result => {

    const {mutate: update} = useUpdateReview()

    const [completed, setCompleted] = useState<boolean>(false)
    const [review, setReview] = useState<IReview>(prev)

    useEffect(() => {
        setCompleted(Boolean(review.negativeText) && Boolean(review.positiveText) && review.rating !== 0)
    }, [review.negativeText, review.positiveText, review.rating])

    const updateRating = useCallback(
        (rating: number) => setReview({...review, rating}),
        [review]
    )

    const updatePositive = useCallback(
        (positiveText: string) => setReview({...review, positiveText}),
        [review]
    )

    const updateNegative = useCallback(
        (negativeText: string) => setReview({...review, negativeText}),
        [review]
    )

    const save = () => {
        console.log(review)
        update(review)
    }

    return {completed, review, updateRating, updateNegative, updatePositive, save}

}