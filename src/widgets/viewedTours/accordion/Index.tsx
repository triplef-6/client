import {FC, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, AppSkeleton, TourPagination} from "@/shared/ui";
import {ReviewForm, TourCard, useContributorTours, useToursForReview} from "@/entities";
import {useAuthContext} from "@/features";
import {TourMetrics} from "@/widgets";

export const Index: FC = () => {

    const {user} = useAuthContext()

    const {
        data: myTours,
        isSuccess: isSuccessMyTours,
        isLoading: isMyTourLoading,
        isPlaceholderData: isPlaceholderMyTours
    } = useContributorTours(user.id)

    const {
        data: reviewedTours,
        isSuccess: isReviewedToursSuccess,
        isLoading: isReviewedToursLoading,
        isPlaceholderData: isReviewedToursPlaceholder
    } = useToursForReview(user.id)

    const [visibleTours, setVisibleTours] = useState<number>(3)

    return (
        <Accordion type={"single"} collapsible>
            {
                isSuccessMyTours &&
                <AccordionItem value={"value 1"}>
                    <AccordionTrigger>Ваши популярные экскурсии</AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-8"}>
                        {
                            isMyTourLoading || isPlaceholderMyTours
                                ?
                                <AppSkeleton/>
                                :
                                myTours.slice(0, visibleTours).map(
                                    tour => (
                                        <div key={tour.id} className={"flex flex-col lg:flex-row gap-4"}>
                                            <TourCard tour={tour}/>
                                            <TourMetrics tour={tour}/>
                                        </div>
                                    )
                                )
                        }
                        <TourPagination
                            visiable={visibleTours}
                            setVisible={setVisibleTours}
                            maxLength={myTours.length}
                        />
                    </AccordionContent>
                </AccordionItem>
            }
            {
                isReviewedToursSuccess &&
                <AccordionItem value={"value 2"}>
                    <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-4"}>
                        {
                            isReviewedToursLoading || isReviewedToursPlaceholder
                                ?
                                <AppSkeleton/>
                                :
                                reviewedTours.slice(0, visibleTours).map(tour => (
                                    <ReviewForm type={"create"} key={tour.id} tour={tour}/>
                                ))
                        }
                    </AccordionContent>
                </AccordionItem>
            }
        </Accordion>
    );
};