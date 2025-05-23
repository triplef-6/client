import {FC} from "react";
import {Button, LocationsSkeleton} from "@/shared/ui";
import style from "./style.module.css"
import {Link, useLocation} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {LocationCard, useLocations} from "@/entities";
import {sortLocations} from "@/entities/location/utils";

export const Index: FC = () => {

    const location = useLocation()
    const {data, isPlaceholderData, isError} = useLocations()

    if (isError) return <div className={"h-80"}></div>

    return (
        <section className={style.container}>
            <h2 role={"heading"} className={style.heading}>
                Самые популярные направления
            </h2>
            {
                isPlaceholderData
                    ?
                    <LocationsSkeleton/>
                    :
                    <div className={style.list}>
                        {sortLocations(data).map(location => (
                            <LocationCard
                                key={location.id}
                                country={location.country}
                                city={location.city}
                                tourCount={location.tourCount}
                                image={location.image as string}
                            />
                        ))}
                    </div>
            }
            {location.pathname !== `/${RouteNames.LOCATIONS}` && (
                <Link to={`/${RouteNames.LOCATIONS}`}>
                    <Button className={"border-gray-500"} role={"button"} variant={"outline"} size={"lg"}>
                        перейти к списку городов
                    </Button>
                </Link>
            )}
        </section>
    );
};