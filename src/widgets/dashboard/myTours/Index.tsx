import {FC, useState} from "react";
import {useMe} from "@/features";
import {TourCard, useContributorTours} from "@/entities";
import {AccordionContent, AccordionItem, AccordionTrigger, AppSkeleton, TourPagination} from "@/shared/ui";
import {TourMetrics} from "@/widgets";
import s from "./style.module.css"

export const Index: FC = () => {

    const {userId} = useMe()
    if (!userId) return null

    const {
        safeData,
        isLoading,
        isError,
        isEmpty,
        isFetching,
        isPlaceholderData
    } = useContributorTours(userId)

    const [visibleTours, setVisibleTours] = useState<number>(3)

    if (isError) return null

    if (!isFetching && isEmpty) {
        return (
            <AccordionItem value={"value 1"}>
                <AccordionTrigger>Ваши популярные экскурсии</AccordionTrigger>
                <AccordionContent>
                    У вас пока нет популярных экскурсий
                </AccordionContent>
            </AccordionItem>
        )
    }

    return (
        <AccordionItem value={"value 1"}>
            <AccordionTrigger>Ваши популярные экскурсии</AccordionTrigger>
            <AccordionContent className={s.content}>
                {
                    isLoading || isPlaceholderData ?
                        <AppSkeleton/> :
                        safeData.slice(0, visibleTours).map(
                            tour => (
                                <div key={tour.id} className={s.list}>
                                    <TourCard tour={tour}/>
                                    <TourMetrics tour={tour}/>
                                </div>
                            )
                        )
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