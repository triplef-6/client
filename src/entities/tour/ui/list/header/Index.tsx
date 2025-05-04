import {FC} from "react";
import style from "./style.module.css";
import {Drawer} from "./drawer/index.ts";
import {useParams} from "react-router-dom";
import {useTours} from "@/entities";
import {Select} from "./select";

export const Index: FC = () => {

    const {location} = useParams<{location: string}>()
    const {length} = useTours()

    return (
        <header className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>{location}</h1>
                <span className={style.desc}>{length} найденных экскурсий</span>
            </div>
            <div className={style.options}>
                <Drawer/>
                <Select/>
            </div>
        </header>
    );
};