import {FC, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger, AppSkeleton, TourPagination} from "@/shared/ui";
import {ReviewForm, TourCard, useContributorTours} from "@/entities";
import {IUser, UserRole} from "@/shared/types";
import {useAuthContext, useUserOrders} from "@/features";
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
        data: orders,
        isSuccess: isSuccessOrders,
        isLoading: isOrdersLoading,
        isPlaceholderData: isPlaceholderOrders
    } = useUserOrders(user.id)

    const [visibleTours, setVisibleTours] = useState<number>(3)

    return (
        <Accordion type={"single"} collapsible>
            {
                user?.role === UserRole.contributor && isSuccessMyTours &&
                <AccordionItem value={"value 1"}>
                    <AccordionTrigger>Ваши популярные экскурсии</AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-4"}>
                        {
                            isMyTourLoading || isPlaceholderMyTours
                                ?
                                <AppSkeleton/>
                                :
                                myTours.slice(0, visibleTours).map(
                                    tour => (
                                        <div key={tour.id} className={"flex flex-col lg:flex-row gap-4"}>
                                            <TourCard tour={tour}/>
                                            <TourMetrics
                                                tour={tour}
                                                users={tour.registered as IUser[]}
                                                capacity={tour.groupCapacity}
                                            />
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
                isSuccessOrders &&
                <AccordionItem value={"value 2"}>
                    <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
                    <AccordionContent className={"flex flex-col gap-4"}>
                        {
                            isOrdersLoading || isPlaceholderOrders
                                ?
                                <AppSkeleton/>
                                :
                                orders.slice(0, visibleTours).map(order => (
                                    <ReviewForm type={"create"} key={order.tourId} tourId={order.tourId}/>
                                ))
                        }
                    </AccordionContent>
                </AccordionItem>
            }
        </Accordion>
    );
};