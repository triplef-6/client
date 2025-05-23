import React, {FC, Suspense, useState} from "react";
import style from "./style.module.css";
import {Header} from "./header/index.ts";
import {ToursAccordion} from "./ToursAccordion.tsx";
import {AppSkeleton} from "@/shared/ui";

const LazyViewed = React.lazy(() =>
    import('@/widgets/dashboard/viewed').then(module => ({
        default: module.Viewed,
    }))
)

export const Index: FC = () => {

    const [city, setCity] = useState<string>("")
    const [byCity, setByCity] = useState<boolean>(false)

    return (
        <div className={style.container}>
            <Header setCity={setCity} setByCity={setByCity}/>
            <ToursAccordion/>
            <Suspense fallback={<AppSkeleton/>}>
                <LazyViewed city={city} byCity={byCity}/>
            </Suspense>
        </div>
    );
}