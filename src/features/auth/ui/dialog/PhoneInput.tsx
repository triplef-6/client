import {FC} from "react";
import {Phone} from "@/features/auth/ui/Phone.tsx";

type PhoneInputProps = {
    isCorrectedPhone: boolean
    sendCode: () => void
    setIsCorrectedPhone: (value: boolean) => void
    setPhone: (value: string) => void
}

export const PhoneInput: FC<PhoneInputProps> = ({isCorrectedPhone, setPhone, sendCode, setIsCorrectedPhone}) => {
    return (
        <div className={"grid gap-2 w-full"}>
            <div className={"flex flex-row justify-between"}>
                <span className={"text-grayscale-400 text-sm"}>Номер телефона</span>
                <button
                    disabled={isCorrectedPhone}
                    onClick={sendCode}
                    className={"text-grayscale-500 text-sm cursor-pointer hover:text-grayscale-350 transition"}
                >
                    Отправить код
                </button>
            </div>
            <Phone
                setIsDisabled={setIsCorrectedPhone}
                setPhone={setPhone}
            />
        </div>
    );
};