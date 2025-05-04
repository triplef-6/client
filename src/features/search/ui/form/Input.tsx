import {FC, useRef} from "react";
import { useOnClickOutside } from "usehooks-ts";
import {
    Command,
    CommandContainer,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
    CommandLocation,
} from "@/shared/ui";
import {useLocations} from "@/entities";
import {observer} from "mobx-react-lite";
import {useLocation, useSubmitted} from "@/shared/hooks";
import {searchTourStore as store} from "@/features";

export const Input: FC = observer(() => {

    const {data: locations} = useLocations()

    const {
        state,
        value,
        click, select, focus, blur, clear, close
    } = useLocation(store.searchParams)

    const {isSubmitted} = useSubmitted(store)

    const commandRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(commandRef,close)

    return (
        <Command role={"form-command"} ref={commandRef}>
            <CommandInput
                isSubmitted={isSubmitted}
                field={state}
                value={value}
                label={"Где искать"}
                onClear={clear}
                onChangeCapture={click}
                onFocus={focus}
                onBlur={blur}
                data-is-corrected={state.isCorrected}
            />
            <CommandContainer isOpen={state.isOpen}>
                <CommandList>
                    <CommandEmpty>Направления не найдены</CommandEmpty>
                    <CommandGroup heading={"Направления"}>
                        {locations.map((location) => (
                            <CommandLocation
                                key={location.city}
                                onClick={() => select(location.city)}
                                location={location}
                            />
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandContainer>
        </Command>
    );
})