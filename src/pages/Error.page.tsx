import {FC} from "react";
import s from "@/app/styles/pages.module.css";
import {ShieldX} from "lucide-react";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {Button} from "@/shared/ui";

export const ErrorPage: FC = () => {
    return (
        <div className={s.error}>
            <ShieldX height={80} width={80} className={"text-grayscale-500"}/>
            <h1 className={s.errorHeading}>
                Возникла ошибка при отпраке данны!
            </h1>
            <p className={s.errorText}>
                Вы можете вернуться на главную и начать искать новые экскурсии.
            </p>
            <Link to={`/${RouteNames.MAIN}`}>
                <Button>Вернуться на главную</Button>
            </Link>
        </div>
    );
};