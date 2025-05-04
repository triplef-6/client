import {FC} from "react";
import style from "@/app/styles/pages.module.css";
import {Cities, Overview} from "@/widgets";
import {WidgetProvider} from "@/widgets/cities/context";

export const LocationsPage: FC = () => {
    return (
        <div className={style.locations}>
            <Overview/>
            <WidgetProvider>
                <Cities/>
            </WidgetProvider>
        </div>
    );
};