import {FC} from "react";
import {Button} from "@/shared/ui";
import {useUserData} from "@/features/edit/hooks";
import {Field, AvatarField} from "./fields"
import {Contacts} from "./contacts";
import {useEditContext} from "@/features/edit/model";
import fallbackAvatar from "@/shared/assets/icons/avatar.svg"
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";

export const EditProfile: FC = () => {

    const navigate = useNavigate()

    const {isContributor, user, updateImage, updateName, updateSurname, updateInfo} = useUserData()
    const {context, load} = useEditContext()

    return (
        <div className={"flex flex-col gap-4 bg-grayscale-0 rounded-2xl p-6 lg:min-w-80 max-lg:order-last"}>
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
            <Button variant={"outline"} onClick={() => navigate(`/${RouteNames.PROFILE}`)}>
                Вернуться назад
            </Button>
        </div>
    );
};