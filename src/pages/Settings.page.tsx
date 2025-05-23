import {FC, useState} from "react";
import {Switch} from "@/shared/ui";

export const SettingsPage: FC = () => {

    const [isNotify, setIsNotify] = useState<boolean>(true)
    const [isNotifyInSocial, setIsNotifyInSocial] = useState<boolean>(false)

    return (
        <div className={"flex flex-col gap-8 h-screen px-24"}>
            <h1 className={"text-3xl font-medium text-grayscale-500 pt-8"}>
                Настройки
            </h1>
            <div className={"flex flex-col gap-4"}>
                <h2 className={"text-2xl font-medium text-grayscale-500"}>
                    Основные
                </h2>
                <div className={"flex flex-row gap-8 text-grayscale-500 text-base"}>
                    <Switch defaultValueBol={isNotify} onChangeValue={setIsNotify}/>
                    <p>Получать уведомления от сервиса в пуш уведомлениях</p>
                </div>
                <div className={"flex flex-row gap-8 text-grayscale-500 text-base"}>
                    <Switch defaultValueBol={isNotifyInSocial} onChangeValue={setIsNotifyInSocial}/>
                    <p>Получать уведомления от сервиса в социальных сетях</p>
                </div>
            </div>
            <div className={"flex flex-col gap-4"}>
                <h2 className={"text-2xl font-medium text-grayscale-500"}>
                    Безопастность
                </h2>
            </div>
        </div>
    );
};