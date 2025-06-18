import {ISlot} from "@/shared/types";
import {FC} from "react";
import {formatDate, formatPeople} from "@/shared/lib";
import s from "./style.module.css"
import {UserRoundCheck} from "lucide-react";
import {Button} from "@/shared/ui";
import {useDeleteButton} from "@/features/create/hooks";

type SlotProps = {
    slot: ISlot
}

export const Slot: FC<SlotProps> = ({slot}) => {

    const {clear} = useDeleteButton(slot)

    return (
        <div className={s.slotTrigger}>
            <UserRoundCheck width={25} height={25} className={s.iconTriggerSlot}/>
            <p className={s.slotTriggerDateTime}>
                {formatDate(slot.date ?? new Date())} {slot.time}
            </p>
            <p className={s.slotTriggerText}>
                На экскурсию смогут записаться {formatPeople(slot.groupCapacity)}.
            </p>
            <Button onClick={clear} variant={"booking"} size={"sm"} className={"rounded-xl"}>
                Удалить
            </Button>
        </div>
    )
}