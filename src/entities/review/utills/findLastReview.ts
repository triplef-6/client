import {IReview} from "@/shared/types";

export const findLastReview = (reviews: IReview[], tourId: number): IReview => {
    return reviews.find(r => r.tourId === tourId) as IReview
}