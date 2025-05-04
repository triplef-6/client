import {FC, useEffect, useRef} from "react";
import {useOnClickOutside} from "usehooks-ts";
import {SocialInput} from "@/shared/ui";
import {useVk} from "@/features/edit/hooks";
import {useEditContext} from "@/features/edit/model";

export const Vk: FC = () => {

    const {state, clear, focus, blur, clickInput, close, value} = useVk()
    const {setIsDisabledVk} = useEditContext()

    useEffect(() => setIsDisabledVk(!state.isCorrected), [setIsDisabledVk, state.isCorrected])

    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <SocialInput
            ref={inputRef}
            field={state}
            value={value}
            label={"Аккаунт ВКонтакте"}
            onClear={clear}
            onChangeCapture={clickInput}
            onFocus={focus}
            onBlur={blur}
        />
    );

};