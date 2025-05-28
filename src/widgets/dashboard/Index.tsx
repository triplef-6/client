import React, {FC, Suspense, useState} from "react";
import {Accordion, AppSkeleton} from "@/shared/ui";
import {authStore as auth, useMe} from "@/features";
import style from "./style.module.css";
import {Header} from "./header";
import {ToursForReview} from "./toursForReview";
import {MyReviews} from "./myReviews";
import {UserRole} from "@/shared/types";
import {MyTours} from "@/widgets/dashboard/myTours/index.ts";

const LazyViewed = React.lazy(() =>
    import('@/widgets/dashboard/viewed').then(module => ({
        default: module.Viewed,
    }))
)

export const Index: FC = () => {

    const {myRole, isSuccess} = useMe()
    const [city, setCity] = useState<string>("")
    const [byCity, setByCity] = useState<boolean>(false)
    const isAuth = auth.isAuth

    return (
        <div className={style.container}>
            <Header setCity={setCity} setByCity={setByCity}/>
            <Accordion type={"single"} collapsible>
                {myRole === UserRole.guide && isAuth && <MyTours/>}
                {isAuth && <ToursForReview/>}
                {isAuth && isSuccess && <MyReviews/>}
            </Accordion>
            <Suspense fallback={<AppSkeleton/>}>
                <LazyViewed city={city} byCity={byCity}/>
            </Suspense>
        </div>
    );
}