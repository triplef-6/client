import { IReview } from "@/shared/types";

export const serializeReviewToFormData = (review: IReview): FormData => {

    const formData = new FormData()

    formData.append("id", review.id.toString())
    formData.append("name", review.name)
    formData.append("withChildren", review.withChildren.toString())
    formData.append("personCount", review.personCount.toString())
    formData.append("rating", review.rating.toString())
    formData.append("positiveText", review.positiveText)
    formData.append("negativeText", review.negativeText)
    formData.append("userId", review.userId.toString())
    formData.append("tourId", review.tourId.toString())

    return formData

}