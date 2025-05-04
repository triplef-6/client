import {FC} from "react";
import style from "./style.module.css"
import {Button} from "@/shared/ui";
import {LogIn} from "lucide-react";
import {RouteNames} from "@/shared/types";
import {useNavigate} from "react-router-dom";

export const Index: FC = () => {

    const navigate = useNavigate()

    return (
        <div className={style.container}>
            <LogIn className={style.icon} height={48} width={48}/>
            <span className={style.heading}>
                Войдите или создайте аккаунт, чтобы использовать все функции
            </span>
            <Button onClick={() => navigate(`/${RouteNames.AUTH}`)} className={style.button}>
                Войти
            </Button>
        </div>
    );
};