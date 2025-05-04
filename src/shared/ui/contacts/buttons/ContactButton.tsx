import {FC, useState} from "react";
import {Alert, AlertDescription, Button} from "@/shared/ui";
import {Info} from "lucide-react";
import {formatPhone} from "@/shared/utills";

type ContactButtonProps = {
    phone: string
}

export const ContactButton: FC<ContactButtonProps> = ({phone}) => {

    const [visiableAlert, setVisiableAlert] = useState<boolean>(false)
    const [text, setText] = useState<string>("Связаться")

    const copyOnClipboard = async () => {
        try {

            await navigator.clipboard.writeText(phone.toString())

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
                        Номер телефона успешно скопирован
                    </AlertDescription>
                </Alert>
            }
            <Button
                size={"contact"}
                onClick={copyOnClipboard}
                onMouseEnter={() => setText(formatPhone(phone))}
                onMouseLeave={() => setText("Связаться")}
            >
                {text}
            </Button>
        </>
    );
};