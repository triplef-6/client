import {FC} from "react";
import {SearchX} from "lucide-react";

type NotFoundProps = {
    heading: string
    text: string
}

export const NotFound: FC<NotFoundProps> = ({heading, text}) => {
    return (
        <div className={"flex flex-col items-center w-full gap-8 py-10"}>
            <SearchX width={80} height={80} className={"text-grayscale-500"}/>
            <div className={"flex flex-col items-center gap-4 text-center"}>
                <h1 className={"text-xl text-grayscale-500 font-semibold"}>{heading}</h1>
                <p className={"text-base text-grayscale-400 lg:w-2/3"}>{text}</p>
            </div>
        </div>
    );
};