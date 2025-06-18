import {FC} from "react";
import {ITour, RouteNames} from "@/shared/types";
import {Details} from "./details";
import {Contributor} from "./contributor";
import s from "./style.module.css"
import {ReviewForm, Reviews} from "@/entities/review";
import {AppSkeleton, BookingViewCard, Contacts, ContributorSkeleton} from "@/shared/ui";
import {useToursForReview, useUser} from "@/entities";
import {Link, useNavigate} from "react-router-dom";
import {ChevronRight} from "lucide-react";
import {useSlots} from "@/features/booking/model/useSlots.ts";

type DescriptionProps = {
    tour: ITour
}

export const Index: FC<DescriptionProps> = ({tour}) => {

    const navigate = useNavigate()

    const {slots} = useSlots(tour.id)

    const {
        safeData: toursForReview,
        isError: isToursForReviewError,
        isLoading: isToursForReviewLoading
    } = useToursForReview()

    const {
        user: guide,
        isLoading: isGuideLoading,
        isError: isGuideError
    } = useUser(tour.contributorId)

    if (isGuideError || isToursForReviewError) navigate(`/${RouteNames.MAIN}`)

    return (
        <div className={s.container}>

            <div className={s.subContainer}>
                <p>{tour.description.info}</p>
            </div>

            <h2 className={s.heading}>
                Что Вас ождает:
            </h2>

            <div className={s.subContainer}>
                <p>{tour.description.whatToExpect}</p>
                <span className={s.bold}>
                    Что вам встретится по пути
                </span>
                <ul className={s.list}>
                    {tour.description.places.map((location, i) => (
                        <li key={i}>{location}</li>
                    ))}
                </ul>
                <span className={s.bold}>
                    О чём будем беседовать
                </span>
                <ul className={s.list}>
                    {tour.description.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                    ))}
                </ul>
            </div>

            <div className={s.subContainer}>
                <h3 className={s.heading}>
                    Организационные детали
                </h3>
                <p>{tour.description.orgDetails}</p>
            </div>

            <div className={s.subContainer}>
                <h3 className={s.heading}>
                    Место встречи
                </h3>
                <p>{tour.description.meetingPlace}</p>
            </div>

            <div className={s.contacts}>
                <h3 className={s.heading}>
                    Остались вопросы?
                </h3>
                {
                    isGuideLoading ?
                        <ContributorSkeleton/> :
                        <Contacts contacts={guide.contacts}/>
                }
            </div>

            <Details format={tour.format}/>

            <div className={s.bookingContainer}>
                <Link className={s.link} to={`/${RouteNames.BOOKING}/${tour.id}`}>
                    <h2 className={s.heading}>
                        Ближайшие доступные даты
                    </h2>
                    <ChevronRight width={24} height={24} className={"text-grayscale-500"}/>
                </Link>
                <div className={s.slots}>
                    {slots.map(slot => <BookingViewCard key={slot.id} slot={slot}/>)}
                </div>
            </div>

            <Reviews
                tourId={tour.id}
                rating={tour.rating}
                ratingCount={tour.ratingCount}
            />

            {
                toursForReview.some(i => i.id === tour.id) &&
                <div className={s.toursForReview}>
                    <h2 className={s.heading}>
                        Поделитесь вашими впечатлениями от экскурсии
                    </h2>
                    {isToursForReviewLoading ? <AppSkeleton/> : <ReviewForm key={tour.id} tour={tour}/>}
                </div>
            }

            <Contributor contributorId={tour.contributorId}/>

        </div>
    );
};