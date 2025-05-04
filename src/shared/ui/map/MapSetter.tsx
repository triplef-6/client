// noinspection TypeScriptUMDGlobal

import {FC} from "react";
import { YandexMapCoordinates } from "@/shared/types";
import {Placemark, YMaps, Map, SearchControl} from "@pbe/react-yandex-maps";

const YANDEX_API_KEY = import.meta.env.VITE_YANDEX_MAP_API

type MapSetterProps = {
    value: YandexMapCoordinates
    update: (newCoordinates: YandexMapCoordinates) => void
}

export const MapSetter: FC<MapSetterProps> = ({ value, update }) => {

    const click = (event: ymaps.IEvent) => {
        const newCoords = event.get("coords")
        update({
            point: { latitude: newCoords[0], longitude: newCoords[1] },
            zoom: value.zoom
        })
    }

    return (
        <YMaps query={{apikey: YANDEX_API_KEY}}>
            <div className={"w-full h-96 rounded-2xl overflow-hidden"}>
                <Map
                    state={{
                        center: [value.point.latitude, value.point.longitude],
                        zoom: value.zoom,
                    }}
                    className={"w-full h-full"}
                    onClick={click}
                    options={{ suppressMapOpenBlock: true }}
                >
                    <SearchControl
                        state={{
                            center: [value.point.latitude, value.point.longitude],
                            zoom: value.zoom,
                        }}
                        options={{ float: "right" }}
                    />
                    <Placemark geometry={[value.point.latitude, value.point.longitude]}/>
                </Map>
            </div>
        </YMaps>
    );
};