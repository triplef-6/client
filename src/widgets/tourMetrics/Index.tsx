import {FC} from "react";
import {CalendarCheck, Eye, Users} from "lucide-react";
import {Button} from "@/shared/ui";
import {ITour} from "@/shared/types";
import s from "./style.module.css"
import {useEditTour} from "@/shared/hooks";
import {formatPeople} from "@/shared/lib/format";
import {useDeleteTour, useReviewsByTourId} from "@/entities";

type TourMetricsProps = {
    tour: ITour
}

export const Index: FC<TourMetricsProps> = ({tour}) => {

    const {click} = useEditTour(tour)
    const {mutate} = useDeleteTour()

    const {length: reviewsLength} = useReviewsByTourId(tour.id)

    const deleteTour = () => mutate(tour.id)

    return (
        <div className={s.container}>
            <div>

                <span className={s.heading}>Данные экскурсии</span>

                <div className={s.params}>
                    <div className={s.metric}>
                        <Users width={20} height={20} className={"text-grayscale-500"}/>
                        <span className={s.subHeading}>Забронированно</span>
                    </div>
                    <p className={s.text}>{tour.groupCapacity} мест</p>
                </div>

                <div className={s.params}>
                    <div className={s.metric}>
                        <Eye width={20} height={20} className={"text-grayscale-500"}/>
                        <span className={s.subHeading}>Отзывы</span>
                    </div>
                    <p className={s.text}>Экскурсию прокоментировали {formatPeople(reviewsLength)}</p>
                </div>

                <div className={s.params}>
                    <div className={s.metric}>
                        <CalendarCheck width={20} height={20} className={"text-grayscale-500"}/>
                        <span className={s.subHeading}>Время начала</span>
                    </div>
                    <p className={s.text}>
                        {tour.date &&
                            new Date(tour.date).toLocaleDateString("ru-RU", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                weekday: "long",
                            })
                        }
                    </p>
                </div>

            </div>
            <div className={"flex flex-col gap-1"}>
                <Button onClick={click}>Изменить</Button>
                <Button onClick={deleteTour} className={s.deleteButton} variant={"outline"}>Отменить</Button>
            </div>
        </div>
    );
};