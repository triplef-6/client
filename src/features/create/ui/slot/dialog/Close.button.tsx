import {FC} from "react";
import {Button, DialogClose} from "@/shared/ui";

export const CloseButton: FC = () => {
    return (
        <DialogClose asChild>
            <Button className={"flex justify-center w-full"} variant={"secondary"}>
                Закрыть
            </Button>
        </DialogClose>
    );
};