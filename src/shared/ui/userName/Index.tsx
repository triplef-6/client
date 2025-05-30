import {FC} from "react";
import edit from "@/shared/assets/icons/edit.svg"
import {formatName} from "@/shared/lib/format";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {useSafeAvatar} from "@/shared/utils";

type EditProfileProps = {
    name: string
    avatar: string
}

export const Index: FC<EditProfileProps> = ({name, avatar}) => {

    const navigate = useNavigate()
    const {safeAvatar, handler} = useSafeAvatar(avatar)

    return (
        <div className={"flex flex-row justify-between items-center mb-4 w-full lg:w-72"}>
            <div className={"flex flex-row gap-4 items-center"}>
                <img
                    alt="avatar"
                    className={"rounded-full"}
                    width={40}
                    height={40}
                    src={safeAvatar}
                    onError={handler}
                />
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