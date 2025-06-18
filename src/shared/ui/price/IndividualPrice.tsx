import {FC} from "react";

type PriceProps = {
    price: number
}

export const IndividualPrice: FC<PriceProps> = ({price}) => {
    return (
        <div className={"flex items-center flex-row gap-2 w-full"}>
            <span className={"text-2xl font-medium text-grayscale-500"}>
                {price} ₽
            </span>
            <span className={"text-sm text-grayscale-400"}>
                за человека
            </span>
        </div>
    );
};