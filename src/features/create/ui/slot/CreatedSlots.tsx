import {FC} from "react";
import {observer} from "mobx-react-lite";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Slot} from "@/shared/ui";
import {useCreatedSlots} from "@/features/create/hooks";

import s from "./style.module.css"
import {DatePicker, GroupCapacitySlider, TimePicker} from "./fields";
import {AddSlotButton, DialogButton, CloseButton} from "./dialog";


export const CreatedSlots: FC = observer(() => {

    const slots = useCreatedSlots()

    return (
        <div className={s.createdSlots}>
            {slots.map(slot => <Slot key={slot.id} slot={slot}/>)}
            <Dialog>
                <AddSlotButton/>
                <DialogContent className={"sm:max-w-[340px]"}>
                    <DialogHeader>
                        <DialogTitle>Новая запись</DialogTitle>
                        <DialogDescription>
                            Укажите, когда и в какое время будет проходить экскурсия и сколько есть мест.
                            Будьте внимательны, вы не можете запланировать разные события на одно и тоже время.
                        </DialogDescription>
                    </DialogHeader>
                    <div className={"flex items-center gap-2 w-full"}>
                        <div className={"grid gap-4 w-full"}>
                            <DatePicker/>
                            <TimePicker/>
                            <GroupCapacitySlider/>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogButton/>
                        <CloseButton/>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
})