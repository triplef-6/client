import {FC} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/shared/ui";

import {DatePicker} from "./DatePicker.tsx";
import {Time} from "./Time.tsx";
import {GroupCapacity} from "./GroupCapacity.tsx";
import {DialogButton} from "./DialogButton.tsx";
import {DialogCloseButton} from "./DialogCloseButton.tsx";
import {AddButton} from "./AddButton.tsx";

export const EditSlot: FC = () => {
    return (
        <Dialog>
            <AddButton/>
            <DialogContent className={"sm:max-w-[340px]"}>
                <DialogHeader>
                    <DialogTitle>Новая запись</DialogTitle>
                    <DialogDescription>
                        Укажите, когда будет экскурсия и сколько есть мест.
                    </DialogDescription>
                </DialogHeader>
                <div className={"flex items-center gap-2 w-full"}>
                    <div className={"grid gap-4 w-full"}>
                        <DatePicker/>
                        <Time/>
                        <GroupCapacity/>
                    </div>
                </div>
                <DialogFooter>
                    <DialogButton/>
                    <DialogCloseButton/>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};