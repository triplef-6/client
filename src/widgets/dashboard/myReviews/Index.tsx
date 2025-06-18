import {FC, useState} from "react";
import {ReviewFormForUpdate, useReviewsByUserId} from "@/entities";
import {AccordionContent, AccordionItem, AccordionTrigger, AppSkeleton, TourPagination} from "@/shared/ui";
import {useMe} from "@/features";

export const Index: FC = () => {

    const {me} = useMe()
    const [visible, setVisible] = useState<number>(3)
    const {
        safeData: reviews,
        length,
        isEmpty,
        isFetching,
        isLoading,
        isPlaceholderData,
        isError
    } = useReviewsByUserId(me.id)

    if (!isFetching && isEmpty) return (
        <AccordionItem value={"value 3"}>
            <AccordionTrigger>Ваши отзывы об экскурсиях</AccordionTrigger>
            <AccordionContent>
                Вы пока не оставляли отзывов.
            </AccordionContent>
        </AccordionItem>
    )

    if (isError) return null

    return (
        <AccordionItem value={"value 3"}>
            <AccordionTrigger>Ваши отзывы об экскурсиях</AccordionTrigger>
            <AccordionContent className={"flex flex-col gap-4"}>
                {
                    isLoading || isPlaceholderData ?
                        <AppSkeleton/> :
                        reviews.slice(0, visible).map(review => (
                            <ReviewFormForUpdate key={review.id} myReview={review}/>
                        ))
                }
                {
                    !isEmpty &&
                    <TourPagination visiable={visible} setVisible={setVisible} maxLength={length}/>
                }
            </AccordionContent>
        </AccordionItem>
    )
}