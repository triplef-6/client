import {FC} from "react";
import {Button, DialogTrigger} from "@/shared/ui";
import {CirclePlus} from "lucide-react";
import {useAddSlotButton} from "@/features/create/hooks";
import s from "./style.module.css"
import {observer} from "mobx-react-lite";

export const AddButton: FC = observer(() => {

    const disabled = useAddSlotButton()

    return (
        <DialogTrigger asChild>
            <Button
                disabled={disabled}
                variant={"secondary"}
                className={s.addButton}
            >
                {disabled ? "Нельзя" : "Добавить"}
                <CirclePlus
                    width={80}
                    height={80}
                    className={"text-grayscale-400"}
                />
            </Button>
        </DialogTrigger>
    );
})