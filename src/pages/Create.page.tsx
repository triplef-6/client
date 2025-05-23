import {FC} from "react";
import style from "@/app/styles/pages.module.css"
import {Main, Sidebar} from "@/features";

export const CreatePage: FC = () => {
    return (
        <div className={style.createTour}>
            <Sidebar/>
            <Main/>
        </div>
    );
};