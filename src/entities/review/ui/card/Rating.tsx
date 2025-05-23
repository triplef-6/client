import {FC} from "react";
import {cn} from "@/app/lib";

type RatingProps = {
    rating: number
}

export const Rating: FC<RatingProps> = ({rating}) => {
    return (
        <div className={cn(
            "flex items-center justify-center w-8 h-6 rounded-xl text-grayscale-0 text-sm",
            (rating <= 3) && "bg-red-gr",
            (rating > 3) && "bg-green-gr",
        )}>
            {rating}
        </div>
    );
};