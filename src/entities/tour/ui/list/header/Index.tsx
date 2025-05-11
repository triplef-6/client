import {FC} from "react";
import style from "./style.module.css";
import {Drawer} from "./drawer/index.ts";
import {useTours} from "@/entities";
import {Select} from "./select";
import {useParams} from "react-router-dom";

export const Index: FC = () => {

    const {location} = useParams<{location: string}>()
    const {length, data: tours} = useTours()

    return (
        <header className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>{length > 0 ? tours[0].location.city : location}</h1>
                <span className={style.desc}>{length} найденных экскурсий</span>
            </div>
            <div className={style.options}>
                <Drawer/>
                <Select/>
            </div>
        </header>
    );
};