import React, {FC, Suspense} from "react";
import s from '@/app/styles/pages.module.css'
import {AppSkeleton} from "@/shared/ui";

const LazyOnBoardingWidget = React.lazy(() =>
    import('../widgets/onboarding').then(module => ({
        default: module.OnBoardingWidget,
    }))
)

export const OnBoardingPage: FC = () => {
    return (
        <div className={s.onboarding}>
            <Suspense fallback={<AppSkeleton/>}>
                <LazyOnBoardingWidget/>
            </Suspense>
        </div>
    );
};