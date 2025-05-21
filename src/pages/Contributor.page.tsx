import React, {FC, Suspense} from "react";
import {useParams} from "react-router-dom";
import {AppSkeleton} from "@/shared/ui";

const LazyContributorLayout = React.lazy(() =>
    import('../entities').then(module => ({
        default: module.ContributorLayout,
    }))
)

export const ContributorPage: FC = () => {
    const {id} = useParams<{ id: string, title: string }>()
    return (
        <Suspense
            fallback={
                <div className={"py-10"}>
                    <AppSkeleton/>
                </div>
            }
        >
            <LazyContributorLayout contributorId={Number(id)}/>
        </Suspense>
    )
};