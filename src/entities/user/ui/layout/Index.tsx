import {FC} from "react";
import style from "./style.module.css"
import {Header} from "./header";
import {Description} from "./description";
import {Tours} from "./tours";
import {useContributorTours, useUser} from "@/entities";
import {AppSkeleton, NotFound} from "@/shared/ui";

type LayoutProps = {
    contributorId: number
}

export const Index: FC<LayoutProps> = ({contributorId}) => {

    const {
        data: contributor,
        isLoading,
        isError,
        isFetching
    } = useUser(contributorId)

    const {
        data: tours,
        isLoading: isToursLoading,
        isPlaceholderData: isPlaceholderTours,
        isError: isToursError
    } = useContributorTours(contributorId)

    if (isError || isToursError || !tours || !contributor) return (
        <NotFound heading={"Данные не найдены"} text={"Возникла проблема с поиском контрибьютера"}/>
    )

    return (
        <div className={style.container}>
            {
                isLoading || isFetching ?
                    <AppSkeleton/> :
                    <Header
                        name={contributor.name}
                        surname={contributor.surname}
                        avatar={contributor.avatar}
                        contacts={contributor.contacts}
                        rating={contributor.rating}
                        ratingCount={contributor.ratingCount}
                    />
            }
            {contributor.info && <Description desc={contributor.info}/>}
            {(isToursLoading || isPlaceholderTours) ? <AppSkeleton/> : <Tours tours={tours}/>}
        </div>
    );
};