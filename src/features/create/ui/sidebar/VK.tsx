import {FC, useRef} from "react";
import {observer} from "mobx-react-lite";
import {useSocial} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {useOnClickOutside} from "usehooks-ts";
import {SocialInput} from "@/shared/ui";

export const VK: FC = observer(() => {

    const {
        value,
        state,
        clear, focus, blur, clickInput,close
    } = useSocial(store.contacts, "vk")

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
})