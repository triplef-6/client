import {FC, useState} from "react";
import {Alert, AlertDescription, Button} from "@/shared/ui";
import vk from "@/shared/assets/icons/vk.svg";
import {Info} from "lucide-react";

type VKButtonProps = {
    id: string
}

export const VKButton: FC<VKButtonProps> = ({id}) => {

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
                        ID Вконтакте успешно скопирован
                    </AlertDescription>
                </Alert>
            }
            <Button size={"contactIcon"} onClick={copyOnClipboard}>
                <img width={32} height={32} alt={"vk"} src={vk}/>
            </Button>
        </>
    );
};