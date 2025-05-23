import {FC} from "react";
import style from "./style.module.css";

type DescProps = {
    desc: string
}

export const Index: FC<DescProps> = ({desc}) => {
    return (
        <div className={style.container}>
            {desc}
        </div>
    );
};