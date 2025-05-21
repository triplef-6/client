import {FC} from "react";
import style from "./style.module.css";
import {UserName} from "@/shared/ui";
import {ProfileButtons} from "@/widgets/profileSidebar/buttons";
import {useMe} from "@/features";

export const Index: FC = () => {

    const {user, userId} = useMe()
    if (!userId) return null

    return (
        <div className={style.container}>
            <UserName name={user.name} avatar={user.avatar}/>
            <ProfileButtons/>
        </div>
    );
};