import {KeySquare} from "lucide-react";
import {FC} from "react";
import s from "./style.module.css"
import {Button} from "@/shared/ui";
import {useAuthContext} from "@/features";

export const Index: FC = () => {

    const {login} = useAuthContext()

    return (
        <div className={s.container}>
            <div className={s.desc}>
                <div className={s.item}>
                    <KeySquare width={40} height={40} className={"text-grayscale-500"}/>
                    <span className={s.heading}>Вход в личный кабинет</span>
                </div>
                <p className={s.text}>
                    Войдите в свой Google аккаунт, чтобы использовать все функции приложения
                </p>
            </div>
            <Button onClick={login} size={"lg"}>
                Войти с помощью Google
            </Button>
        </div>
    );
};