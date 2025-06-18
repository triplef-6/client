import {FC} from "react";
import {BookingForm} from "@/features";
import {useNavigate, useParams} from "react-router-dom";
import s from "@/app/styles/pages.module.css"
import {RouteNames} from "@/shared/types";

export const BookingPage: FC = () => {

    const navigate = useNavigate()
    const {id } = useParams<{ id: string }>()

    if (!id) navigate(`/${RouteNames.ERROR}`)

    return (
        <div className={s.booking}>
            <BookingForm tourId={Number(id)}/>
        </div>
    );
};