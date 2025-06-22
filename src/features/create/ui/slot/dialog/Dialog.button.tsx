import {FC} from "react";
import {useDialogButton} from "@/features/create/hooks";
import {Button, DialogClose} from "@/shared/ui";
import {observer} from "mobx-react-lite";

export const DialogButton: FC = observer(() => {

    const {disabled, update} = useDialogButton()

    if (disabled) return <Button disabled>Добавить</Button>

    return (
        <DialogClose asChild>
            <Button onClick={update}>
                Добавить
            </Button>
        </DialogClose>
    );
})