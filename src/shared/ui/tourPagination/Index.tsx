import React, {FC} from "react";
import {Button} from "@/shared/ui";

type TourPaginationProps = {
    visiable: number
    setVisible:  React.Dispatch<React.SetStateAction<number>>
    maxLength: number
}

export const Index: FC<TourPaginationProps> = (
    {maxLength, visiable, setVisible}
) => {

    const loadTours = () => setVisible(prev => prev + 2)

    return (
        visiable < maxLength &&
        <div className={"flex justify-center"}>
            <Button onClick={loadTours} variant={"outline"}>
                Загрузить еще
            </Button>
        </div>
    );
};