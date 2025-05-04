import {useAuthContext, useUserOrders} from "@/features";
import {useCreateReview, useReviewsByUserId, useUpdateReview} from "@/entities";
import {IOrder, IReview, ITour, TourAccessibility} from "@/shared/types";
import {useCallback, useEffect, useState} from "react";
import {findLastReview} from "@/entities/review/utills";

type Result = {
    completed: boolean
    review: IReview
    updateRating: (value: number) => void
    updateNegative: (value: string) => void
    updatePositive: (value: string) => void
    save: () => void
}

export const useReviewForm = (type: "create" | "update", tour: ITour): Result => {

    const {user} = useAuthContext()
    const {data: reviews} = useReviewsByUserId(user.id)
    const {data: orders} = useUserOrders(user.id)
    const last = findLastReview(reviews, tour.id)

    const {mutate: create} = useCreateReview()
    const {mutate: update} = useUpdateReview()

    const [completed, setCompleted] = useState<boolean>(false)
    const [review, setReview] = useState<IReview>({
        id: type === "update" ? last.id : Date.now(),
        userId: user.id,
        tourId: tour.id,
        name: user.name,
        rating: type === "update" ? last.rating : 0,
        negativeText: type === "update" ? last.negativeText : "",
        positiveText: type === "update" ? last.positiveText : "",
        withChildren: tour.accessibility === TourAccessibility.WITH_CHILDREN,
        personCount: (orders as IOrder[]).find(i => i.groupCapacity === tour.groupCapacity)?.groupCapacity || 0
    })

    useEffect(() => {
        setCompleted(Boolean(review.negativeText) && Boolean(review.positiveText) && review.rating !== 0)
    }, [review.negativeText, review.positiveText, review.rating]);

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

    const save = () => type === "create" ? create({user, review}) : update(review)

    return {completed, review, updateRating, updateNegative, updatePositive, save}

}