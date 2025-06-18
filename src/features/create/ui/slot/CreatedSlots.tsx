import {FC} from "react";
import {observer} from "mobx-react-lite";
import {Slot} from "@/shared/ui";
import {useCreatedSlots} from "@/features/create/hooks";
import {EditSlot} from "@/features/create/ui/slot/EditSlot.tsx";
import s from "./style.module.css"

export const CreatedSlots: FC = observer(() => {
    const slots = useCreatedSlots()
    return (
        <div className={s.createdSlots}>
            {slots.map(slot => <Slot key={slot.id} slot={slot}/>)}
            <EditSlot/>
        </div>
    )
})