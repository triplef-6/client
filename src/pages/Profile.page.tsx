import {FC} from "react";
import {ProfileSidebar, ViewedTours} from "@/widgets";

export const ProfilePage: FC = () => {
    return (
        <div className={"w-full max-w-screen-wide"}>
            <h1 className={"text-3xl font-medium text-grayscale-500 pt-8"}>
                Ваши данные
            </h1>
            <div className={"min-h-screen flex flex-col lg:flex-row gap-8 py-8"}>
                <ProfileSidebar/>
                <ViewedTours/>
            </div>
        </div>
    );
};