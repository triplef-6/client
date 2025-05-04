import {FC} from "react";
import {Button} from "@/shared/ui";
import {Orientation} from "@/features";
import {useCreateButton} from "@/features/create/hooks";

type ButtonProps = {
    orientation: Orientation
}

export const SubmitButton: FC<ButtonProps> = ({orientation}) => {

    const {create} = useCreateButton()

    return (
        <Button
            className={"w-full"}
            role={"submitButton"}
            onClick={create}
            size={orientation === Orientation.HORIZONTAL ? "default" : "lg"}
        >
            Далее
        </Button>
    );

};