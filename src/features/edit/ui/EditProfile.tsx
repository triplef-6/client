import {FC} from "react";
import {AvatarInput, Button, MyInfoInput, NameInput, SurnameInput} from "@/shared/ui";
import {useEditContext} from "@/features";
import {SuccessAlert} from "./SuccessAlert.tsx";
import s from "./style.module.css"
import {Vk} from "./Vk.tsx";
import {Telegram} from "./Telegram.tsx";
import {Phone} from "./Phone.tsx";

export const EditProfile: FC = () => {

    const {
        context,
        goBack, load, updateName, updateSurname, updateInfo, updateImage, setIsDisabled
    } = useEditContext()

    return (
        <div className={s.container}>
            <AvatarInput avatar={context.me.avatar} update={updateImage}/>
            <h2 className={s.heading}>Основное</h2>
            <NameInput defaultValue={context.me.name} updateName={updateName} setIsDisabled={setIsDisabled}/>
            <SurnameInput defaultValue={context.me.surname} updateSurname={updateSurname} setIsDisabled={setIsDisabled}/>
            <div className={s.contacts}>
                <h3 className={s.contactsHeading}>Контакты</h3>
                <Vk/>
                <Telegram/>
                <Phone/>
            </div>
            {
                context.isGuide &&
                <MyInfoInput defaultValue={context.me.info ?? ""} updateInfo={updateInfo} setIsDisabled={setIsDisabled}/>
            }
            {context.isSuccessLoad && <SuccessAlert/>}
            <Button className={s.loadButton} disabled={context.isDisabled} onClick={load}>
                Изменить данные
            </Button>
            <Button variant={"outline"} onClick={() => goBack()}>
                Вернуться назад
            </Button>
        </div>
    );
};