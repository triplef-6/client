import {FC} from "react";
import {Button, DialogTrigger} from "@/shared/ui";
import {CirclePlus} from "lucide-react";
import s from "../style.module.css"

export const AddSlotButton: FC = () => {
    return (
        <DialogTrigger asChild>
            <Button variant={"secondary"} className={s.addButton}>
                Добавить
                <CirclePlus width={80} height={80} className={"text-grayscale-400"}/>
            </Button>
        </DialogTrigger>
    )
}