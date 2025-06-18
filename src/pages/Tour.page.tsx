import React, {FC, Suspense} from "react";
import {Description, Header, Sidebar, Tags, useTour} from "@/entities";
import {useParams} from "react-router-dom";
import {AppSkeleton, CarouselSkeleton, NotFound} from "@/shared/ui";
import s from "@/app/styles/pages.module.css";

const LazyCarousel = React.lazy(() =>
    import('../entities/tour/ui/carousel').then(module => ({
        default: module.Carousel,
    }))
)

export const TourPage: FC = () => {

    const {id } = useParams<{ id: string, title: string }>()
    const {data: tour, isLoading, isError} = useTour(Number(id))

    if (isError) return <NotFound type={"tour"}/>
    if (!tour || isLoading) return <AppSkeleton/>

    return (
        <div className={s.tour}>
            <Tags tags={tour.tags}/>
            <Header tour={tour}/>
            <Suspense fallback={<CarouselSkeleton/>}>
                <LazyCarousel
                    images={tour.images}
                    coordinates={tour.coordinates}
                />
            </Suspense>
            <main className={s.tourMain}>
                <Description tour={tour}/>
                <Sidebar tour={tour}/>
            </main>
        </div>
    )

}