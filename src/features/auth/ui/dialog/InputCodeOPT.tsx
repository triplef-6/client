import {FC} from "react";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/shared/ui";

type InputCodeOPTProps = {
    value: string
    updateValue: (value: string) => void
    timeLeft: number
    isActiveTimer: boolean
    resetTimer: () => void
}

export const InputCodeOpt: FC<InputCodeOPTProps> = ({value, updateValue, timeLeft, resetTimer, isActiveTimer}) => {
    return (
        <div className={"grid gap-2 w-full"}>
            <span className={"text-grayscale-400 text-sm"}>Код из смс</span>
            <div className={"flex flex-col lg:flex-row justify-between gap-2"}>
                <InputOTP value={value} onChange={updateValue} maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0}/>
                        <InputOTPSlot index={1}/>
                        <InputOTPSlot index={2}/>
                    </InputOTPGroup>
                    <InputOTPSeparator/>
                    <InputOTPGroup>
                        <InputOTPSlot index={3}/>
                        <InputOTPSlot index={4}/>
                        <InputOTPSlot index={5}/>
                    </InputOTPGroup>
                </InputOTP>
                {isActiveTimer ? (
                    <p className={"text-grayscale-400 text-sm"}>Отправка кода через {timeLeft} сек</p>
                ) : (
                    <button onClick={resetTimer} className={"text-grayscale-400 text-sm hover:text-grayscale-350 transition cursor-pointer"}>
                        Отправить код повторно
                    </button>
                )}
            </div>
        </div>
    );
};