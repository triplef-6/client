import {FC} from "react";
import {TimeInput} from "@/shared/ui";
import {useSubmitted, useTime} from "@/features/create/hooks";

export const Time: FC = () => {

    const {value, focus, blur, state, click} = useTime()
    const isSubmitted = useSubmitted()

    return (
        <TimeInput
            isSubmitted={isSubmitted}
            value={value}
            onChange={click}
            onFocus={focus}
            onBlur={blur}
            field={state}
        />
    );
};