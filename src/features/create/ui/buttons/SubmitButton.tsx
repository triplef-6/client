import {FC} from "react";
import {Button} from "@/shared/ui";
import {Orientation} from "@/features";
import {useSubmitButton} from "@/features/create/hooks";

type ButtonProps = {
    orientation: Orientation
}

export const SubmitButton: FC<ButtonProps> = ({orientation}) => {

    const {submit, disabled} = useSubmitButton()

    return (
        <Button
            className={"w-full"}
            role={"submitButton"}
            onClick={submit}
            disabled={disabled}
            size={orientation === Orientation.HORIZONTAL ? "default" : "lg"}
        >
            Далее
        </Button>
    );

};