import {FC} from "react";
import {CarouselVariant, ImagesCarousel, MapView} from "@/shared/ui";
import {YandexMapCoordinates} from "@/shared/types";
import {useSafetyImages} from "@/shared/utils";

type CarouselProps = {
    images: (string | File | null)[]
    coordinates: YandexMapCoordinates
}

export const Index: FC<CarouselProps> = ({images, coordinates}) => {

    const {safetyImages, isEmpty} = useSafetyImages(images)
    if (isEmpty) return null

    return (
        <div className={"flex flex-col gap-4 wide:flex-row my-8"}>
            <MapView value={coordinates}/>
            <ImagesCarousel variant={CarouselVariant.LARGE} images={safetyImages}/>
        </div>
    )
};