import {FC, useMemo} from "react";
import {SearchX} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {Button} from "@/shared/ui";
import {RouteNames} from "@/shared/types";
import s from "./style.module.css"
import {messages} from "./messages.ts";

type NotFoundProps = {
    type: "user" | "tour" | "tours" | "data"
}

export const NotFound: FC<NotFoundProps> = ({type}) => {

    const navigate = useNavigate()
    const {heading, text} = useMemo(() => messages[type], [type])

    return (
        <div className={s.container}>
            <SearchX width={80} height={80} className={"text-grayscale-500"}/>
            <div className={s.content}>
                <h1 className={s.heading}>{heading}</h1>
                <p className={s.text}>{text}</p>
            </div>
            <Button onClick={() => navigate(`/${RouteNames.MAIN}`)}>
                Вернуться к поиску экскурсий
            </Button>
        </div>
    );
};