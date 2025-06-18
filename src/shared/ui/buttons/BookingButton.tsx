import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";
import {observer} from "mobx-react-lite";

type BookingButtonProps = {
    size: "lg" | "md"
    link: string
    text: string
}

export const BookingButton: FC<BookingButtonProps> = observer(({link, size, text}) => {
    return (
        <Link to={link}>
            <Button size={size}>
                {text}
            </Button>
        </Link>
    );
})