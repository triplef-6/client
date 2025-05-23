import {FC} from "react";
import {TourFormat} from "@/shared/types";
import {PriceContainer} from "./PriceContainer.tsx";

type PriceProps = {
    format: TourFormat
    price: number | undefined
    priceForPerson: number
}

export const Price: FC<PriceProps> = ({format, price, priceForPerson}) => {
    if (format === TourFormat.GROUP) return <PriceContainer text={"за группу"} price={price as number}/>
    return <PriceContainer text={"за человека"} price={priceForPerson}/>
};