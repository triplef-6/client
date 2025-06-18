import {FC} from "react";

type FavHeaderProps = {
    toursCount?: number
}

export const FavHeader: FC<FavHeaderProps> = ({toursCount = 0}) => {
    return (
        <>
            <h1 className={"text-grayscale-500 text-4xl font-medium"}>
                Избранное
            </h1>
            {
                toursCount === 0 &&
                <span className={"text-base text-grayscale-400"}>
                    Список избранных экскурсий пока пуст.
                </span>
            }
        </>
    );
};