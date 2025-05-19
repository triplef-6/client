import React, {FC, Suspense} from "react";
import pages from "@/app/styles/pages.module.css";
import {AppSkeleton, SidebarButton} from "@/shared/ui";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import {Form, Orientation} from "@/features";

const LazyTours = React.lazy(() =>
    import('../entities/tour/ui/list').then(module => ({
        default: module.Tours,
    }))
)

export const ToursPage: FC = () => {
    return (
        <div className={pages.tours}>
            <div className={"flex flex-col gap-4 items-center"}>
                <Form orientation={Orientation.VERTICAL}/>
                <SidebarButton image={favourite} label={"Избранное"}/>
            </div>
            <Suspense fallback={<AppSkeleton/>}>
                <LazyTours/>
            </Suspense>
        </div>
    );
};