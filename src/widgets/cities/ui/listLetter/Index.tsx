import {FC} from "react";
import style from "./style.module.css";
import { cn } from "@/app/lib/utils.ts";
import {lettersArray} from "@/widgets/cities/utils";
import {useWidgetContext} from "@/widgets/cities/context";

export const Index: FC = () => {

    const {context, update} = useWidgetContext()

    return (
        <div className={style.container}>
            {lettersArray.map((letter) => (
                <span
                    key={letter}
                    onClick={() => update(letter)}
                    className={cn(
                        context.city === letter && !context.isActive ? style.active : style.letter,
                        letter !== "Я" && style.border
                    )}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};