import {FC, useRef} from "react";
import {observer} from "mobx-react-lite";
import {usePhone, useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {useOnClickOutside} from "usehooks-ts";
import {PhoneInput} from "@/shared/ui";

export const Phone: FC = observer(() => {

    const {
        value,
        state,
        click, clear, close, focus, blur
    } = usePhone(store.contacts)

    const {isSubmitted} = useSubmitted(store)


    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <PhoneInput
            ref={inputRef}
            isSubmitted={isSubmitted}
            field={state}
            value={value}
            label={"Номер телефона"}
            onClear={clear}
            onChangeCapture={click}
            onFocus={focus}
            onBlur={blur}
        />
    );
})