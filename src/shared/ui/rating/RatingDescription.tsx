import {FC} from "react";
import {formatRatingCount, formatRatings} from "@/shared/lib/format";
import {useWindowSize} from "usehooks-ts";

type RatingDescriptionProps = {
    value: number
}

export const RatingDescription: FC<RatingDescriptionProps> = ({value}) => {

    const {width} = useWindowSize()

    return (
        <p className={"text-grayscale-400 text-base"}>
            {width < 768 ? formatRatingCount(value) : formatRatings(value)}
        </p>
    )
};