import React, {FC, Suspense} from "react";
import {Description, Header, Sidebar, Tags, useTour} from "@/entities";
import {useParams} from "react-router-dom";
import {AppSkeleton, CarouselSkeleton, NotFound} from "@/shared/ui";

const LazyCarousel = React.lazy(() =>
    import('../entities/tour/ui/carousel').then(module => ({
        default: module.Carousel,
    }))
)

export const TourPage: FC = () => {

    const {id } = useParams<{ id: string, title: string }>()
    const {data: tour, isLoading, isError} = useTour(Number(id))

    if (isError) return (
        <NotFound
            heading={"Экскурсия не найдена"}
            text={"Возникла проблема с поиском экскурсии"}
        />
    )

    if (!tour || isLoading) return <AppSkeleton/>

    return (
        <div className={"flex flex-col justify-between py-12 w-full max-w-screen-wide"}>
            <Tags tags={tour.tags}/>
            <Header tour={tour}/>
            <Suspense fallback={<CarouselSkeleton/>}>
                <LazyCarousel images={tour.images as string[]} coordinates={tour.coordinates}/>
            </Suspense>
            <div className={"flex flex-col lg:flex-row lg:justify-between gap-8"}>
                <Description tour={tour}/>
                <Sidebar tour={tour}/>
            </div>
        </div>
    )

}