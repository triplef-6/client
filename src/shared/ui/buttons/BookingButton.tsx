import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";
import {authStore as auth} from "@/features";
import {observer} from "mobx-react-lite";

type BookingButtonProps = {
    size: "lg" | "md"
    link: string
    text: string
}

export const BookingButton: FC<BookingButtonProps> = observer(({link, size, text}) => {

    const isAuth = auth.isAuth

    return (
        <Link to={link}>
            <Button disabled={!isAuth} size={size}>
                {text}
            </Button>
        </Link>
    );
})