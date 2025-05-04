import {FC, useRef} from "react";
import {PriceInput} from "@/shared/ui";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {useOnClickOutside} from "usehooks-ts";
import {observer} from "mobx-react-lite";
import {usePrice} from "@/features/create/hooks";

export const PriceForPerson: FC = observer(() => {

    const {
        value,
        state,
        clear, focus, blur, click,close
    } = usePrice(store.price, "priceForPerson")

    const {isSubmitted} = useSubmitted(store)

    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <PriceInput
            ref={inputRef}
            isSubmitted={isSubmitted}
            field={state}
            value={value}
            label={"Цена за одного человека"}
            onClear={clear}
            onChangeCapture={click}
            onFocus={focus}
            onBlur={blur}
        />
    );
})