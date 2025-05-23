import {FC} from "react";

type GroupPriceProps = {
    text: string
    price: number
}

export const PriceContainer: FC<GroupPriceProps> = ({text, price}) => {
    return (
        <div className={"flex flex-row-reverse max-md:items-center max-md:justify-end md:flex-col max-md:gap-2 md:items-end"}>
            <p className={"text-grayscale-400 text-base"}>
                {text}
            </p>
            <p className={"text-2xl text-grayscale-500 font-medium"}>
                {price} ₽
            </p>
        </div>
    );
};