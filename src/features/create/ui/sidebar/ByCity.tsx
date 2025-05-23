import {FC} from "react";
import {Switch} from "@/shared/ui";
import {observer} from "mobx-react-lite";
import {useSwitch} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";

export const ByCity: FC = observer(() => {

    const {state, update} = useSwitch(store.location)

    return (
        <div className={"w-full flex items-start"}>
            <div className={"flex flex-row gap-2 text-grayscale-600"}>
                <Switch defaultValueBol={state} onChangeValue={update}/>
                    <span>Область видимости: город</span>
            </div>
        </div>
    );
})