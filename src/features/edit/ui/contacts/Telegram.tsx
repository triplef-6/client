import {FC, useEffect, useRef} from "react";
import {useTelegram} from "@/features/edit/hooks";
import {useOnClickOutside} from "usehooks-ts";
import {SocialInput} from "@/shared/ui";
import {useEditContext} from "@/features/edit/model";

export const Telegram: FC = () => {
    
    const {state, clear, focus, blur, clickInput, close, value} = useTelegram()
    const {setIsDisabledTg} = useEditContext()

    useEffect(() => setIsDisabledTg(!state.isCorrected), [setIsDisabledTg, state.isCorrected])
    
    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <SocialInput
            ref={inputRef}
            field={state}
            value={value}
            label={"Аккаунт Telegram"}
            onClear={clear}
            onChangeCapture={clickInput}
            onFocus={focus}
            onBlur={blur}
        />
    );
};