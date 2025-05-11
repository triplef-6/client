import {FC} from "react";
import style from "./style.module.css"
import {ContactButton, TelegramButton, VKButton} from "./buttons";
import {IContacts} from "@/shared/types";

type ContactsProps = {
    contacts: IContacts
}

export const Index: FC<ContactsProps> = ({contacts}) => {
    return (
        <div className={style.container}>
            {contacts.phone && <ContactButton phone={contacts.phone}/>}
            {contacts?.telegram && <TelegramButton id={contacts.telegram as string}/>}
            {contacts?.vk && <VKButton id={contacts.vk as string}/>}
        </div>
    );
};