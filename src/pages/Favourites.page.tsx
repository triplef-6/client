import React, {FC, Suspense} from "react";
import pages from "@/app/styles/pages.module.css";
import {useFavFactory} from "@/features";
import {AppSkeleton} from "@/shared/ui";

const LazyFavList = React.lazy(() =>
    import('@/features').then(module => ({
        default: module.FavList,
    }))
)

export const FavouritesPage: FC = () => {

    const {data: favourites, isLoading, isPending} = useFavFactory()

    if (isLoading || isPending) return <AppSkeleton/>

    return (
        <div className={pages.favorites}>
            <h1 className={"text-grayscale-500 text-4xl font-medium"}>
                Избранное
            </h1>
            {
                favourites.length === 0 &&
                <span className={"text-base text-grayscale-400"}>
                    Список избранных экскурсий пока пуст.
                </span>
            }
            <Suspense fallback={<AppSkeleton/>}>
                <LazyFavList/>
            </Suspense>
        </div>
    );
};