import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {cn} from "@/app/lib/utils.ts";

import {Tag, useReqs} from "@/entities";
import {RouteNames} from "@/shared/types";
import {Button} from "@/shared/ui";

import {Text} from "./Text.tsx";
import style from "./style.module.css"
import {observer} from "mobx-react-lite";

export const Index: FC = observer(() => {

    const navigate = useNavigate()
    const {tags, selected, disabled, add, remove, click} = useReqs()

    const shortTags = tags.slice(0,10)

    return (
        <div className={cn(style.container, style.paddings)}>
            <Text/>
            <div className={style.tags}>
                {shortTags.map((tag, index) => (
                    <Tag
                        key={index}
                        value={selected}
                        tag={tag}
                        add={add}
                        remove={remove}
                        variant={"secondary"}
                    />
                ))}
            </div>
            <div className={style.buttons}>
                <Button
                    onClick={() => navigate(`/${RouteNames.MAIN}`)}
                    variant={"secondary"}
                    size={"md"}
                >
                    Не интересно
                </Button>
                <Button
                    onClick={click}
                    disabled={disabled}
                    size={"md"}
                >
                    Искать
                </Button>
            </div>
        </div>
    );
})