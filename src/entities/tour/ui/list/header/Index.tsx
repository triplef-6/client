import {FC} from "react";
import style from "./style.module.css";
import {Drawer} from "./drawer/index.ts";
import {useTours} from "@/entities";
import {Select} from "./select";
import {searchTourStore as store} from "@/features";

export const Index: FC = () => {

    const {length} = useTours()
    const city = store.searchParams.location.city

    return (
        <header className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>{city}</h1>
                <span className={style.desc}>{length} найденных экскурсий</span>
            </div>
            <div className={style.options}>
                <Drawer/>
                <Select/>
            </div>
        </header>
    );
};