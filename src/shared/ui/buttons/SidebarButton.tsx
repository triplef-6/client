import {FC} from "react";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import next from "@/shared/assets/icons/next-secondary.svg";
import {Button} from "@/shared/ui";

type SidebarButtonProps = {
    label: string,
    image: string
}

export const SidebarButton: FC<SidebarButtonProps> = ({label, image}) => {
    return (
        <Link className={"w-full"} to={`/${RouteNames.FAVOURITES}`}>
            <Button className={"w-full"} variant={"profile"} size={"md"}>
                <img
                    height={24}
                    width={24}
                    alt={"favourite"}
                    src={image}
                />
                {label}
                <img
                    height={20}
                    width={20}
                    alt={"arrow"}
                    src={next}
                />
            </Button>
        </Link>
    );
};