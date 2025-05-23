import React, {FC, Suspense} from "react";
import style from '@/app/styles/pages.module.css'
import {AppSkeleton} from "@/shared/ui";

const LazyOnBoardingWidget = React.lazy(() =>
    import('../widgets/onboarding').then(module => ({
        default: module.OnBoardingWidget,
    }))
)

export const OnBoardingPage: FC = () => {
    return (
        <div className={style.onboarding}>
            <Suspense fallback={
                <div className={"p-20"}>
                    <AppSkeleton/>
                </div>
            }>
                <LazyOnBoardingWidget/>
            </Suspense>
        </div>
    );
};