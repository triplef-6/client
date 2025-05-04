import {FC, useState} from "react";
import {Card} from "./card";
import {Header} from "./header";
import {Pagination} from "./pagination";
import {useReviewsByTourId} from "@/entities";
import {AppSkeleton} from "@/shared/ui";

type ReviewListProps = {
    tourId: number
    rating: number
    ratingCount: number
}

export const Index: FC<ReviewListProps> = ({rating, ratingCount, tourId}) => {

    const {data: reviews, isLoading, isError} = useReviewsByTourId(tourId)
    const [visibleReviews, setVisibleReviews] = useState<number>(2)

    if (isError) return null
    if (isLoading) return <AppSkeleton/>

    return (
        <div className={"flex flex-col gap-8 my-4"}>
            <Header
                rating={rating}
                ratingCount={ratingCount}
            />
            <div className={"flex flex-col gap-4"}>
                {reviews.slice(0, visibleReviews).map(review =>
                    <Card
                        key={review.id}
                        name={review.name}
                        rating={review.rating}
                        positiveText={review.positiveText}
                        negativeText={review.negativeText}
                        withChildren={review.withChildren}
                        personCount={review.personCount}
                    />
                )}
                <Pagination
                    visibleReviews={visibleReviews}
                    setVisibleReviews={setVisibleReviews}
                    reviews={reviews}
                />
            </div>
        </div>
    );
};