import {FC} from "react";
import {Info} from "lucide-react";
import {Alert, AlertDescription} from "@/shared/ui";

export const SuccessAlert: FC = () => {
    return (
        <Alert>
            <Info width={24} height={24} className={"text-secondary-green"}/>
            <AlertDescription className={"text-secondary-green"}>
                Ваши данные успешно обновлены!
            </AlertDescription>
        </Alert>
    );
};