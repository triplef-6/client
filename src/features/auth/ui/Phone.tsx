import {FC, useEffect, useRef} from "react";
import {useOnClickOutside} from "usehooks-ts";
import {PhoneInput} from "@/shared/ui";
import {usePhone} from "@/features/auth/hooks";

type PhoneProps = {
    setIsDisabled: (value: boolean) => void
    setPhone: (value: string) => void
}

export const Phone: FC<PhoneProps> = ({setIsDisabled, setPhone}) => {

    const {value, state, click, clear, close, focus, blur} = usePhone()

    useEffect(() => {
        setIsDisabled(!state.isValidForSubmit)
        setPhone(value)
    }, [setIsDisabled, value])

    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <PhoneInput
            isDialog={true}
            ref={inputRef}
            isSubmitted={false}
            field={state}
            value={value}
            label={"Ваш номер телефона"}
            onClear={clear}
            onChangeCapture={click}
            onFocus={focus}
            onBlur={blur}
        />
    );
}