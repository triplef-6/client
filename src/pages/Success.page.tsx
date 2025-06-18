import {FC} from "react";
import {Check} from "lucide-react";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {Button} from "@/shared/ui";
import s from "@/app/styles/pages.module.css"

export const SuccessPage: FC = () => {
    return (
        <div className={s.success}>
            <Check height={80} width={80} className={"text-grayscale-500"}/>
            <h1 className={s.successHeading}>
                Данные успешно отправлены!
            </h1>
            <p className={s.successText}>
                Вы можете вернуться на главную и начать искать новые экскурсии.
            </p>
            <Link to={`/${RouteNames.MAIN}`}>
                <Button>Вернуться на главную</Button>
            </Link>
        </div>
    );
};