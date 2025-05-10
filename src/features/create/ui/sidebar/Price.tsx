import {FC, useRef} from "react";
import {PriceInput} from "@/shared/ui";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {useOnClickOutside} from "usehooks-ts";
import {observer} from "mobx-react-lite";
import {usePrice, useTourFormat} from "@/features/create/hooks";
import {tourFormatValues as values} from "@/shared/config";
import {TourFormat} from "@/shared/types";

export const Price: FC = observer(() => {

    const {
        value,
        state,
        clear, focus, blur, click, close
    } = usePrice(store.price, "price")

    const {isSubmitted} = useSubmitted(store)

    const inputRef = useRef<HTMLInputElement>(null)
    useOnClickOutside(inputRef,close)

    const {state: format} = useTourFormat(store.price, values)
    if (format.value === TourFormat.INDIVIDUAL) return null

    return (
        <PriceInput
            ref={inputRef}
            isSubmitted={isSubmitted}
            field={state}
            value={value}
            label={"Цена за группу"}
            onClear={clear}
            onChange={click}
            onFocus={focus}
            onBlur={blur}
        />
    );
})