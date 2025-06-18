import {FC} from "react";
import {Button} from "@/shared/ui";
import {Orientation} from "@/features";
import {useSubmitButton} from "@/features/create/hooks";

type ButtonProps = {
    orientation: Orientation
}

export const SubmitButton: FC<ButtonProps> = ({orientation}) => {

    const {submit, isCreatePending, isUpdatePending} = useSubmitButton()

    return (
        <Button
            className={"w-full"}
            role={"submitButton"}
            disabled={isCreatePending || isUpdatePending}
            onClick={submit}
            size={orientation === Orientation.HORIZONTAL ? "default" : "lg"}
        >
            {isCreatePending || isUpdatePending ? "Создаем" : "Далее"}
        </Button>
    );

};