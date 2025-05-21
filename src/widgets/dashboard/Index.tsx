import React, {FC, Suspense, useState} from "react";
import style from "./style.module.css";
import {Header} from "./header/index.ts";
import {useAuthContext} from "@/features";
import {ToursAccordion} from "./ToursAccordion.tsx";
import {AppSkeleton} from "@/shared/ui";

const LazyViewed = React.lazy(() =>
    import('@/widgets/dashboard/viewed').then(module => ({
        default: module.Viewed,
    }))
)

export const Index: FC = () => {

    const {isAuth} = useAuthContext()

    const [city, setCity] = useState<string>("")
    const [byCity, setByCity] = useState<boolean>(false)
    
    return (
        <div className={style.container}>
            <Header setCity={setCity} setByCity={setByCity}/>
            {isAuth && <ToursAccordion/>}
            <Suspense fallback={<AppSkeleton/>}>
                <LazyViewed city={city} byCity={byCity}/>
            </Suspense>
        </div>
    );
};