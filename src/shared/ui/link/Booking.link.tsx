import {FC, JSX} from "react";
import { RouteNames } from "@/shared/types";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { observer } from "mobx-react-lite";
import { authStore as auth } from "@/features";

type LinkProps = {
    tourId: number
};

export const BookingLink: FC<LinkProps> = observer(({ tourId }) => {

    const disabled: boolean = !auth.isAuth
    const linkToPage: string = `/${RouteNames.BOOKING}/${tourId}`

    const content: JSX.Element = (
        <>
            <h2 className={s.heading}>Ближайшие доступные даты</h2>
            <ChevronRight width={24} height={24} className={"text-grayscale-500"}/>
        </>
    )

    return disabled
        ?
        <div className={s.container}>{content}</div>
        :
        <Link to={linkToPage} className={s.link}>{content}</Link>

})