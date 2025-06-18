import {FC} from "react";
import s from "./style.module.css";
import {Frown} from "lucide-react";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {Button} from "@/shared/ui";

export const PageWithError: FC = () => {
    return (
        <div className={s.errorPage}>
            <Frown height={80} width={80} className={"text-grayscale-500"}/>
            <h1 className={s.errorHeadingPage}>
                Не удалось найти страницу!
            </h1>
            <p className={s.errorTextPage}>
                Вы можете вернуться на главную и начать искать новые экскурсии.
            </p>
            <Link to={`/${RouteNames.MAIN}`}>
                <Button>Вернуться на главную</Button>
            </Link>
        </div>
    );
};