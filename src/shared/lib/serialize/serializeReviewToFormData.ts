import { IReview } from "@/shared/types";

export const serializeReviewToFormData = (review: IReview): FormData => {

    const formData = new FormData()

    const reviewData: IReview = {
        id: review.id,
        name: review.name,
        withChildren: review.withChildren,
        personCount: review.personCount,
        rating: review.rating,
        positiveText: review.positiveText,
        negativeText: review.negativeText,
        tourId: review.tourId,
    }

    formData.append(
        "review",
        new Blob([JSON.stringify(reviewData)], { type: "application/json" })
    )

    return formData

}