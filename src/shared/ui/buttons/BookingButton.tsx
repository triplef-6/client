import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";
import {useAuthContext} from "@/features";

type BookingButtonProps = {
    size: "lg" | "md"
    link: string
    text: string
}

export const BookingButton: FC<BookingButtonProps> = ({link, size, text}) => {

    const {isAuth} = useAuthContext()

    return (
        <Link to={link}>
            <Button disabled={!isAuth} size={size}>
                {text}
            </Button>
        </Link>
    );
};