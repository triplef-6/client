import {FC} from "react";
import {EditProfile, EditProvider, EditReqs} from "@/features";
import s from "@/app/styles/pages.module.css"

export const EditProfilePage: FC = () => {
    return (
        <EditProvider>
            <div className={s.editProfile}>
                <EditReqs/>
                <EditProfile/>
            </div>
        </EditProvider>
    );
};