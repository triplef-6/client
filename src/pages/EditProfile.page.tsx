import {FC} from "react";
import {EditProfile, EditProvider, EditReqs} from "@/features";

export const EditProfilePage: FC = () => {
    return (
        <EditProvider>
            <div className={"huge:w-[1440px]"}>
                <div className={"flex flex-col lg:flex-row gap-8 py-8"}>
                    <EditReqs/>
                    <EditProfile/>
                </div>
            </div>
        </EditProvider>
    );
};