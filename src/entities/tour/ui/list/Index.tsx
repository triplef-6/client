import {FC, useState} from "react";
import {TourCard, useTours} from "@/entities";
import {AppSkeleton, NotFound, TourPagination} from "@/shared/ui";
import {Header} from "./header";

export const Index: FC = () => {

    const {
        data: tours,
        isError,
        isPlaceholderData,
        isLoading,
        isSuccess,
        isEmpty,
        isFetching
    } = useTours()

    const [visible, setVisible] = useState<number>(3)

    if (isError || (isEmpty && !isFetching)) return <NotFound type={"tours"}/>

    return (
        <div className={"w-full flex flex-col gap-8"}>
            {isSuccess && <Header/>}
            {
                isLoading || isPlaceholderData ?
                    <AppSkeleton/> :
                    tours.slice(0, visible).map(
                        tour => <TourCard key={tour.id} tour={tour}/>
                    )
            }
            {
                !isPlaceholderData &&
                <TourPagination visiable={visible} setVisible={setVisible} maxLength={tours.length}/>
            }
        </div>
    )
};