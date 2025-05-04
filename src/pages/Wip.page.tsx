import {FC} from "react";
import {Wrench} from "lucide-react";
import {Button} from "@/shared/ui";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";

export const WipPage: FC = () => {
    return (
        <div className={"flex flex-col h-screen pt-44 gap-4 items-center"}>
            <Wrench height={80} width={80} className={"text-grayscale-500"}/>
            <h1 className={"text-2xl text-grayscale-500 font-semibold"}>
                Страница в разработке
            </h1>
            <p className={"text-xl text-grayscale-400 lg:w-1/3 text-center"}>
                На данный момент страница недоступна, вернитесь на Главную
            </p>
            <Link to={`/${RouteNames.MAIN}`}>
                <Button>
                    Вернуться на главную
                </Button>
            </Link>
        </div>
    );
};