import {FC, useState} from "react";
import {ReviewFormForUpdate, useReviewsByUserId} from "@/entities";
import {AccordionContent, AccordionItem, AccordionTrigger, AppSkeleton, TourPagination} from "@/shared/ui";
import {useMe} from "@/features";

export const Index: FC = () => {

    const {myId} = useMe()
    if (!myId) throw new Error("Пользователь не найден!")

    const {
        safeData: reviews,
        length,
        isError,
        isEmpty,
        isFetching,
        isLoading,
        isPlaceholderData
    } = useReviewsByUserId(myId)

    const [visible, setVisible] = useState<number>(3)

    if (isError) return null

    if (!isFetching && isEmpty) {
        return (
            <AccordionItem value={"value 3"}>
                <AccordionTrigger>Ваши отзывы об экскурсиях</AccordionTrigger>
                <AccordionContent>
                    Вы пока не оставляли отзывов.
                </AccordionContent>
            </AccordionItem>
        )
    }

    if (isLoading || isPlaceholderData) return <AppSkeleton/>

    return (
        <AccordionItem value={"value 3"}>
            <AccordionTrigger>Ваши отзывы об экскурсиях</AccordionTrigger>
            <AccordionContent className={"flex flex-col gap-4"}>
                {
                    reviews.slice(0, visible).map(review => (
                        <ReviewFormForUpdate key={review.id} myReview={review}/>
                    ))
                }
                <TourPagination visiable={visible} setVisible={setVisible} maxLength={length}/>
            </AccordionContent>
        </AccordionItem>
    )
}