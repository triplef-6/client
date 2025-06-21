import {FC, useState} from "react";
import {ReviewForm, useToursForReview} from "@/entities";
import {AccordionContent, AccordionItem, AccordionTrigger, AppSkeleton, TourPagination} from "@/shared/ui";

export const Index: FC = () => {

    const {
        safeData: tours,
        length,
        isError,
        isEmpty,
        isFetching,
        isLoading,
        isPlaceholderData
    } = useToursForReview()

    const [visible, setVisible] = useState<number>(3)

    if (isError || !isFetching && isEmpty) return null

    return (
        <AccordionItem value={"value 2"}>
            <AccordionTrigger>Оцените экскурсии</AccordionTrigger>
            <AccordionContent className={"flex flex-col gap-4"}>
                {
                    isLoading || isPlaceholderData ?
                        <AppSkeleton/> :
                        tours.slice(0, visible).map(tour => (
                            <ReviewForm key={tour.id} tour={tour}/>
                        ))
                }
                {
                    !isEmpty &&
                    <TourPagination
                        visiable={visible}
                        setVisible={setVisible}
                        maxLength={length}
                    />
                }
            </AccordionContent>
        </AccordionItem>
    )
}