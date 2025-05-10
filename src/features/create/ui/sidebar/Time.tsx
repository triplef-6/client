import {FC} from "react";
import {TimeInput} from "@/shared/ui";
import {useSubmitted, useTime} from "@/shared/hooks";
import {createTourStore as store} from "@/features";

export const Time: FC = () => {

    const {value, focus, blur, state, click} = useTime(store.time)
    const {isSubmitted} = useSubmitted(store)

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