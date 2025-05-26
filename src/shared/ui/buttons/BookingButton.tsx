import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";
import {authStore as auth} from "@/features";
import {observer} from "mobx-react-lite";

type BookingButtonProps = {
    size: "lg" | "md"
    link: string
    text: string
    freeSeats: number
}

export const BookingButton: FC<BookingButtonProps> = observer(({link, size, text, freeSeats}) => {

    const isAuth = auth.isAuth
    const disabled = !isAuth || freeSeats === 0

    return (
        <Link to={link}>
            <Button disabled={disabled} size={size}>
                {freeSeats > 0 ? text : "Мест нет"}
            </Button>
        </Link>
    );
})