import {FC} from "react";
import {SearchX} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {Button} from "@/shared/ui";
import {RouteNames} from "@/shared/types";

type NotFoundProps = {
    heading: string
    text: string
}

export const NotFound: FC<NotFoundProps> = ({heading, text}) => {

    const navigate = useNavigate()

    return (
        <div className={"flex flex-col min-h-screen pt-10 items-center w-full gap-8 py-10"}>
            <SearchX width={80} height={80} className={"text-grayscale-500"}/>
            <div className={"flex flex-col items-center gap-4 text-center w-4/5"}>
                <h1 className={"text-xl text-grayscale-500 font-semibold"}>{heading}</h1>
                <p className={"text-base text-grayscale-400"}>{text}</p>
            </div>
            <Button onClick={() => navigate(`/${RouteNames.MAIN}`)}>
                Вернуться к поиску экскурсий
            </Button>
        </div>
    );
};