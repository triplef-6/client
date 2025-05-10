import {KeySquare} from "lucide-react";
import {FC} from "react";
import s from "./style.module.css"
import {Button} from "@/shared/ui";
import {RouteNames} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "@/features";

export const Index: FC = () => {

    const {setIsAuth} = useAuthContext()
    const navigate = useNavigate()

    const click = () => {
        window.location.href = RouteNames.LOGIN
        navigate(`/${RouteNames.MAIN}`)
    }

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
            <Button onClick={click} size={"lg"}>
                Войти с помощью Google
            </Button>
            <Button onClick={() => setIsAuth(true)} size={"lg"}>
                Тестовый вход
            </Button>
        </div>
    );
};