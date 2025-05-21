import {FC, useState} from "react";
import {useMe} from "@/features";
import {ReviewForm, useToursForReview} from "@/entities";
import {AccordionContent, AccordionItem, AccordionTrigger, AppSkeleton, TourPagination} from "@/shared/ui";

export const Index: FC = () => {

    const {userId} = useMe()
    if (!userId) return null

    const {
        safeData,
        isError,
        isEmpty,
        isFetching,
        isLoading,
        isPlaceholderData
    } = useToursForReview(userId)

    const [visibleTours, setVisibleTours] = useState<number>(3)

    if (isError) return null

    if (!isFetching && isEmpty) {
        return (
            <AccordionItem value={"value 2"}>
                <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
                <AccordionContent>
                    Вы пока на посетили экскурсии.
                </AccordionContent>
            </AccordionItem>
        )
    }

    return (
        <AccordionItem value={"value 2"}>
            <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
            <AccordionContent className={"flex flex-col gap-4"}>
                {
                    isLoading || isPlaceholderData ?
                        <AppSkeleton/> :
                        safeData.slice(0, visibleTours).map(tour => (
                            <ReviewForm type={"create"} key={tour.id} tour={tour}/>
                        ))
                }
                <TourPagination
                    visiable={visibleTours}
                    setVisible={setVisibleTours}
                    maxLength={safeData.length}
                />
            </AccordionContent>
        </AccordionItem>
    );
};