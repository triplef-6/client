import {FC, useRef} from "react";
import {
    Command,
    CommandContainer,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
    CommandLocation
} from "@/shared/ui";
import {useLocations} from "@/entities";
import {useOnClickOutside} from "usehooks-ts";
import {useLocation, useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {observer} from "mobx-react-lite";

export const Location: FC = observer(() => {

    const {data: locations} = useLocations()

    const {
        state,
        value,
        click, select, focus, blur, clear, close
    } = useLocation(store.locationTime)

    const {isSubmitted} = useSubmitted(store)

    const inputRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(inputRef,close)

    return (
        <Command role={"form-command"} ref={inputRef}>
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