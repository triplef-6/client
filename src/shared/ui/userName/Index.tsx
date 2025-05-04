import {FC} from "react";
import edit from "@/shared/assets/icons/edit.svg"
import {formatName} from "@/shared/utills";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import fallbackAvatar from "@/shared/assets/icons/avatar.svg"

type EditProfileProps = {
    name: string
    avatar: string
}

export const Index: FC<EditProfileProps> = ({name, avatar}) => {

    const navigate = useNavigate()

    return (
        <div className={"flex flex-row justify-between items-center mb-4 w-full lg:w-72"}>
            <div className={"flex flex-row gap-4 items-center"}>
                <img alt="avatar" width={40} height={40} src={avatar ?? fallbackAvatar}/>
                <span className={"font-medium text-2xl text-grayscale-600"}>
                    {formatName(name)}
                </span>
            </div>
            <button onClick={() => navigate(`/${RouteNames.EDIT_PROFILE}`)}>
                <img alt={"edit"} width={24} height={24} src={edit}/>
            </button>
        </div>
    );
};