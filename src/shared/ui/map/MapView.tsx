import {FC} from "react";
import { YandexMapCoordinates } from "@/shared/types";
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import {cn} from "@/app/lib";

const YANDEX_API_KEY = import.meta.env.VITE_YANDEX_MAP_API

type MapProps = {
    value: YandexMapCoordinates
}

export const MapView: FC<MapProps> = ({value }) => {
    return (
        <YMaps query={{apikey: YANDEX_API_KEY}}>
            <div className={cn("w-full wide:w-[420px] rounded-2xl overflow-hidden")}>
                <Map
                    width={"100%"}
                    state={{
                        center: [value.point.latitude, value.point.longitude],
                        zoom: value.zoom,
                    }}
                    options={{ suppressMapOpenBlock: true }}
                >
                    <Placemark geometry={[value.point.latitude, value.point.longitude]}/>
                </Map>
            </div>
        </YMaps>
    );
};