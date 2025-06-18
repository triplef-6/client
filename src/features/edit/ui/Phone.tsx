import {FC, useEffect, useRef} from "react";
import {useOnClickOutside} from "usehooks-ts";
import {PhoneInput} from "@/shared/ui";
import {usePhone} from "@/features/edit/hooks";
import {useEditContext} from "@/features/edit/model";

export const Phone: FC = () => {

    const {value, state, click, clear, close, focus, blur} = usePhone()
    const {setIsDisabled} = useEditContext()

    useEffect(() => setIsDisabled(state.isCorrected), [setIsDisabled, value])

    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <PhoneInput
            ref={inputRef}
            isSubmitted={false}
            field={state}
            value={value}
            label={"Номер телефона"}
            onClear={clear}
            onChangeCapture={click}
            onFocus={focus}
            onBlur={blur}
        />
    );
}