import {FC} from "react";
import users from "@/shared/assets/icons/users-light.svg";
import back from "@/shared/assets/icons/back.svg";
import wallet from "@/shared/assets/icons/wallet.svg";
import {Item} from "./item";
import style from "./style.module.css"
import {formatPeople} from "@/shared/utills";
import {TourFormat} from "@/shared/types";

type DetailsProps = {
    format: TourFormat
    groupCapacity: number
}

export const Index: FC<DetailsProps> = ({format, groupCapacity}) => {
    return (
        <div className={style.container}>
            <h2 className={style.heading}>
                Условия бронирования
            </h2>
            <div className={style.main}>
                {
                    format === TourFormat.GROUP ?
                        <Item
                            title={"Групповой формат"}
                            description={`Группа до ${formatPeople(groupCapacity)}`}
                            image={users}
                        /> :
                        <Item
                            title={"Экскурсия"}
                            description={"будет только для вас"}
                            image={users}
                        />
                }
                <Item
                    title={"Бесплатная отмена"}
                    description={"за 48 часов"}
                    image={back}
                />
                <Item
                    title={"Предоплата 25%,"}
                    description={"остальное – на месте"}
                    image={wallet}
                />
            </div>
        </div>
    );
};