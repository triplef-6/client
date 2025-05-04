import {FC} from "react";
import {Button} from "@/shared/ui";
import {useUserData} from "@/features/edit/hooks";
import {Field, AvatarField} from "./fields"
import {Contacts} from "./contacts";
import {useEditContext} from "@/features/edit/model";
import fallbackAvatar from "@/shared/assets/icons/avatar.svg"

export const EditProfile: FC = () => {

    const {
        isContributor,
        user,
        updateImage, updateName, updateSurname, updateInfo, load
    } = useUserData()

    const {context} = useEditContext()

    return (
        <div className={"flex flex-col gap-4 bg-grayscale-0 rounded-2xl p-6 lg:w-[700px]"}>
            <AvatarField avatar={user.avatar ?? fallbackAvatar} update={updateImage}/>
            <span className={"text-lg text-grayscale-500 font-semibold py-2"}>Основное</span>
            <Field
                defaultValue={user.name}
                onChangeHandler={updateName}
                title={"Имя"}
                placeholder={"Введите имя"}
            />
            <Field
                defaultValue={user.surname}
                onChangeHandler={updateSurname}
                title={"Фамилия"}
                placeholder={"Введите фамилию"}
            />
            <Contacts/>
            {
                isContributor &&
                <Field
                    defaultValue={user.info || ""}
                    onChangeHandler={updateInfo}
                    title={"Описание"}
                    placeholder={"Введите описание"}
                />
            }
            <Button className={"mt-12"} disabled={context.isDisabled} onClick={load}>
                Изменить данные
            </Button>
        </div>
    );
};