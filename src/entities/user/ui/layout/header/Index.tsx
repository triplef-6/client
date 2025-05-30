import {FC} from 'react';
import {IContacts} from "@/shared/types";
import style from "./style.module.css";
import {Contacts, Rating} from "@/shared/ui";
import {formatName} from "@/shared/lib/format";
import contributor from "@/shared/assets/icons/contributor.svg"
import {useSafeAvatar} from "@/shared/utils";

type HeaderProps = {
    name: string
    surname: string
    avatar: string
    contacts: IContacts
    rating: number
    ratingCount: number
}

export const Index: FC<HeaderProps> = ({name, surname, rating, ratingCount, avatar, contacts}) => {

    const {safeAvatar, handler} = useSafeAvatar(avatar, contributor)

    return (
        <div className={style.container}>
            <div className={style.startCol}>
                <div className={style.contributor}>
                    <img
                        width={64}
                        height={64}
                        className={"rounded-full"}
                        alt={"contributor"}
                        src={safeAvatar}
                        onError={handler}
                    />
                    <div className={style.desc}>
                        <span className={style.name}>{formatName(`${name} ${surname}`)}</span>
                        <span>Представитель команды гидов</span>
                    </div>
                </div>
                <Rating rating={rating} ratingCount={ratingCount}/>
            </div>
            <div>
                {contacts && <Contacts contacts={contacts}/>}
            </div>
        </div>
    );
};