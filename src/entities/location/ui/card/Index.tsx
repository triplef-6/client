import { FC } from "react";
import {cn} from "@/app/lib/utils.ts";
import container from "./style/container.module.css"
import content from "./style/content.module.css"
import gradient from "./style/gradient.module.css"

type LocationCardProps = {
    country: string;
    city: string;
    tourCount: number;
    image: string;
};

export const Index: FC<LocationCardProps> = ({ country, city, tourCount, image }) => {
    return (
        <div
            role={"locationCardBackground"}
            className={cn(container.layout, container.sizes, container.bg, container.transitions, "group")}
            style={{ backgroundImage: `url(${image})` }}
        >

            <div className={cn(gradient.bg, gradient.opacity)}/>

            <div className={content.layout}>
                <span className={content.country}>
                    {country}
                </span>
                <span className={content.city}>
                    {city}
                </span>
                <span className={content.count}>
                    {tourCount}+ экскурсий
                </span>
            </div>

        </div>
    );
};