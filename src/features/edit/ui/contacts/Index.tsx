import {FC} from "react";
import {Vk} from "./Vk.tsx";
import {Telegram} from "./Telegram.tsx";
import {Phone} from "./Phone.tsx";

export const Index: FC = () => {
    return (
        <div className={"flex flex-col gap-2"}>
            <span className={"text-lg text-grayscale-500 font-semibold py-2"}>Контакты</span>
            <Vk/>
            <Telegram/>
            <Phone/>
        </div>
    );
};