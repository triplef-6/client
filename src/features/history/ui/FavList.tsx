import {FC, useState} from "react";
import {TourCard} from "@/entities";
import s from "./style.module.css"
import {useFavourites} from "@/features";
import {AppSkeleton, TourPagination} from "@/shared/ui";
import {observer} from "mobx-react-lite";

export const FavList: FC = observer(() => {

    const {
        favourites,
        isLoading,
        isPlaceholderData,
        isError,
        isEmpty,
        isFetching,
        isSuccess,
        isPendingSync
    } = useFavourites()

    const [visible, setVisible] = useState<number>(2)

    return (
        <div className={s.list}>
            <h1 className={s.heading}>Избранное</h1>
            {
                !isFetching && isEmpty && !isPendingSync &&
                <span className={s.notFound}>Список избранных экскурсий пока пуст.</span>
            }
            {
                isError &&
                <span className={s.notFound}>Возникла проблема с загрузкой данных.</span>
            }
            {
                isLoading || (isPlaceholderData && isFetching) || isPendingSync
                    ?
                    <AppSkeleton/>
                    :
                    favourites
                        .slice(0, visible)
                        .map(tour => <TourCard key={tour.id} tour={tour}/>)
            }
            {
                isSuccess && !isPlaceholderData && !isLoading &&
                <TourPagination visiable={visible} setVisible={setVisible} maxLength={favourites.length}/>
            }
        </div>
    );
})