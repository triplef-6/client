import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";
import {observer} from "mobx-react-lite";
import {authStore as auth} from "@/features";

type BookingButtonProps = {
    size: "lg" | "md"
    link: string
    text: string
}

export const BookingButton: FC<BookingButtonProps> = observer(({link, size, text}) => {

    const disabled = !auth.isAuth

    const button = (
        <Button disabled={disabled} size={size}>
            {text}
        </Button>
    )

    return disabled ? button : <Link to={link}>{button}</Link>

})