import {FC} from "react";
import {Slider} from "@/shared/ui";
import {useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";
import {formatRouteLength} from "@/shared/lib/format";
import {cn} from "@/app/lib";
import {observer} from "mobx-react-lite";
import {useRouteLength} from "@/features/create/hooks";

export const RouteLength: FC = observer(() => {

    const {state, isError, update} = useRouteLength(store.locationTime)
    const {isSubmitted} = useSubmitted(store)

    return (
        <div className={"flex flex-col gap-2 py-2"}>
            <div
                className={cn(
                    "flex flex-row gap-1 text-sm",
                    isError && isSubmitted ? "text-secondary-red" : "text-grayscale-500"
                )}
            >
                <span>Длина маршрута</span>
                <span className={"font-medium"}>{formatRouteLength(state)}</span>
            </div>
            <Slider
                value={[state]}
                onValueChange={update}
                defaultValue={[1]}
                max={100}
                step={1}
            />
        </div>
    );
})