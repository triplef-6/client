import {FC, useState} from "react";
import telegram from "@/shared/assets/icons/telegram.svg";
import {Alert, AlertDescription, Button} from "@/shared/ui";
import {Info} from "lucide-react";

type TelegramButtonProps = {
    id: string
}

export const TelegramButton: FC<TelegramButtonProps> = ({id}) => {

    const [visiableAlert, setVisiableAlert] = useState<boolean>(false)

    const copyOnClipboard = async () => {
        try {

            await navigator.clipboard.writeText(id)

            setVisiableAlert(true)
            setTimeout(() => setVisiableAlert(false), 3000)

        } catch (e) {
            console.log("Ошибка копирования номера телефона", e)
        }
    }

    return (
        <>
            {
                visiableAlert &&
                <Alert>
                    <Info width={24} height={24}/>
                    <AlertDescription>
                        ID Telegram успешно скопирован
                    </AlertDescription>
                </Alert>
            }
            <Button size={"contactIcon"} onClick={copyOnClipboard}>
                <img width={32} height={32} alt={"telegram"} src={telegram}/>
            </Button>
        </>
    );
};