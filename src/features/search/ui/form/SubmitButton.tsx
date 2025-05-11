import {FC} from "react";
import {Button} from "@/shared/ui";
import {Orientation} from "@/features";
import {useSearchButton} from "@/features/search/hooks";

type ButtonProps = {
    orientation: Orientation
}

export const SubmitButton: FC<ButtonProps> = ({orientation}) => {

    const {search} = useSearchButton()

    return (
        <Button
            role={"submitButton"}
            onClick={search}
            size={orientation === Orientation.HORIZONTAL ? "default" : "lg"}
        >
            Искать
        </Button>
    )
}