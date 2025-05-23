import {FC} from "react";
import style from "./style.module.css";
import {UserName} from "@/shared/ui";
import {ProfileButtons} from "@/widgets/profileSidebar/buttons";
import {useMe} from "@/features";

export const Index: FC = () => {

    const {me, myId} = useMe()
    if (!myId) return null

    return (
        <div className={style.container}>
            <UserName name={me.name} avatar={me.avatar}/>
            {me.info && <div className={style.desc}>{me.info}</div>}
            <ProfileButtons/>
        </div>
    );
};