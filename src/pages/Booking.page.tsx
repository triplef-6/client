import {FC} from "react";
import {BookingForm} from "@/features";
import {useParams} from "react-router-dom";
import s from "@/app/styles/pages.module.css"

export const BookingPage: FC = () => {

    const {id } = useParams<{ id: string }>()

    return (
        <div className={s.booking}>
            <BookingForm tourId={Number(id)}/>
        </div>
    );
};