import {FC} from "react";
import {CommandItem} from "@/shared/ui";
import {MapPin} from "lucide-react";
import style from "./commandLocation.module.css"
import {ILocation} from "@/shared/types";

type CommandLocationProps = {
    location: ILocation
    onClick?: () => void
}

export const CommandLocation: FC<CommandLocationProps> = ({location, onClick}) => {
    return (
        <div onClick={onClick}>
            <CommandItem>
                <div className={style.iconContainer}>
                    <MapPin className={style.icon}/>
                </div>
                <div className={style.location}>
                    <span>{location.city}</span>
                    <span className={style.region}>{location.region}</span>
                </div>
            </CommandItem>
        </div>
    );
};