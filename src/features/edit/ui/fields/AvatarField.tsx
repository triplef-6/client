import React, {FC} from "react";
import {useSafeAvatar} from "@/shared/utils";

type AvatarField = {
    avatar: string
    update: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const AvatarField: FC<AvatarField> = ({avatar, update}) => {

    const {safeAvatar, handler} = useSafeAvatar(avatar)

    return (
        <div className={"flex justify-center w-full"}>
            <label className="cursor-pointer rounded-full bg-cover bg-center transition hover:opacity-80">
                <img
                    alt="avatar"
                    className={"rounded-full max-h-24 max-w-24"}
                    width={96}
                    height={96}
                    src={safeAvatar}
                    onError={handler}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={update}
                    className="hidden"
                />
            </label>
        </div>
    );
};