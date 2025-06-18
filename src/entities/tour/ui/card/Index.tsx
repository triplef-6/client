import React, {FC, Suspense} from "react";
import {ITour, RouteNames} from "@/shared/types";
import {Button, CarouselVariant, ImagesSkeleton, Price, Rating, TourParams} from "@/shared/ui";
import s from "./style.module.css"
import {useNavigate} from "react-router-dom";
import {ToFavourite, tourLocalHistoryStore as history} from "@/features";
import {useWindowSize} from "usehooks-ts";
import {truncateText} from "@/shared/lib/format";

type TourCardProps = {
    tour: ITour
}

const LazyImagesCarousel = React.lazy(() =>
    import('@/shared/ui').then(module => ({
        default: module.ImagesCarousel,
    }))
)

export const Index: FC<TourCardProps> = ({tour}) => {

    const {width} = useWindowSize()
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/${RouteNames.TOUR}/${tour.id}/${encodeURIComponent(tour.title)}`)
        history.addToViewed(tour)
    }

    return (
        <div className={s.container}>

            <Suspense fallback={<ImagesSkeleton/>}>
                <LazyImagesCarousel variant={CarouselVariant.SMALL} images={tour.images as string[]}/>
            </Suspense>

            <div className={s.content}>

                <div className={s.top}>
                    <div className={s.header}>
                        <Rating rating={tour.rating} ratingCount={tour.ratingCount}/>
                        <ToFavourite tour={tour}/>
                    </div>

                    <div className={s.desc}>
                        <div className={s.descContent}>
                            <p className={s.title}>{tour.title}</p>
                            <p className={s.text}>{truncateText(tour.description.info)}</p>
                        </div>
                        {
                            width >= 768 &&
                            <Price format={tour.format} price={tour.price} priceForPerson={tour.priceForPerson}/>
                        }
                    </div>
                </div>

                <div className={s.details}>
                    <TourParams
                        duration={tour.duration}
                        length={tour.routeLength}
                        formatBehavior={tour.formatBehavior}
                    />
                    {width < 768 &&
                        <Price format={tour.format} price={tour.price} priceForPerson={tour.priceForPerson}/>}
                    <Button onClick={clickHandler}>Выбрать</Button>
                </div>

            </div>

        </div>
    );
};