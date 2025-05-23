import {FC} from "react";
import {CarouselVariant, ImagesCarousel, MapView} from "@/shared/ui";
import {YandexMapCoordinates} from "@/shared/types";

type CarouselProps = {
    images: string[]
    coordinates: YandexMapCoordinates
}

export const Index: FC<CarouselProps> = ({images, coordinates}) => {
    return (
        <div className={"flex flex-col gap-4 wide:flex-row my-8"}>
            <MapView value={coordinates}/>
            <ImagesCarousel variant={CarouselVariant.LARGE} images={images}/>
        </div>
    );
};