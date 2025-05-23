import {FC} from "react";
import {Switch} from "@/shared/ui";
import {observer} from "mobx-react-lite";
import {useSwitch} from "@/shared/hooks";
import {searchTourStore as store} from "@/features";
import {Orientation} from "@/features/search/types";

type SwitchProps = {
    orientation: Orientation
}

export const SwitchByCity: FC<SwitchProps> = observer(({orientation}) => {

    const {state, update} = useSwitch(store.searchParams)

    return (
        <div
            className={
            orientation === Orientation.HORIZONTAL ?
                "flex max-wide:py-2 wide:justify-end" :
                "w-full flex items-start px-4"
        }
        >
            <div className={"flex flex-row gap-2 text-grayscale-600"}>
                <Switch
                    defaultValueBol={state}
                    onChangeValue={update}
                />
                <span>
                    Поиск в городе
                </span>
            </div>
        </div>
    );
})