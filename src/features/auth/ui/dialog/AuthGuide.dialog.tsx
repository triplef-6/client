import {FC} from "react";
import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger, MyInfoInput
} from "@/shared/ui";
import {useCreateTour} from "@/shared/hooks";
import {useMe} from "@/features";
import {UserRole} from "@/shared/types";
import {useAuthGuide} from "@/features/auth/hooks";
import {Speech} from "lucide-react";
import {InputCodeOpt} from "./InputCodeOPT.tsx";
import {PhoneInput} from "@/features/auth/ui/dialog/PhoneInput.tsx";

export const AuthGuideDialog: FC = () => {

    const {me} = useMe()
    const {click} = useCreateTour()

    const {
        isOpen,
        info,
        isDisabled,
        isPending,
        opt,
        timeLeft,
        isActiveTimer,
        isShowOpt,
        isCorrectedPhone,
        setIsOpen, setIsCorrectedPhone, setIsCorrectedInfo,
        setInfo, setPhone, load, sendCode, updateOpt, resetTimer
    } = useAuthGuide()

    if (me.role === UserRole.guide) return (
        <Button className={"w-full"} onClick={click}>
            Предложить экскурсию
        </Button>
    )

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className={"w-full"} asChild>
                <Button className={"w-full"}>
                    Предложить экскурсию
                </Button>
            </DialogTrigger>
            <DialogContent className={"max-w-80 md:max-w-[425px]"}>
                <DialogHeader>
                    <DialogTitle className={"flex flex-row gap-2 items-center max-md:justify-center"}>
                        <Speech width={24} height={24} className={"text-grayscale-500"}/>
                        Станьте гидом!
                    </DialogTitle>
                    <DialogDescription>
                        Зарегистрируйтесь как контрибьютер (гид) в нашем приложении,
                        чтобы у вас была возможность добавлять сови собственные экскурсии.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <PhoneInput
                        isCorrectedPhone={isCorrectedPhone}
                        sendCode={sendCode}
                        setIsCorrectedPhone={setIsCorrectedPhone}
                        setPhone={setPhone}
                    />
                    {
                        isShowOpt &&
                        <InputCodeOpt
                            value={opt}
                            updateValue={updateOpt}
                            timeLeft={timeLeft}
                            resetTimer={resetTimer}
                            isActiveTimer={isActiveTimer}
                        />
                    }
                    <div className={"grid gap-2 w-full"}>
                        <MyInfoInput
                            defaultValue={info}
                            updateInfo={setInfo}
                            setIsDisabled={setIsCorrectedInfo}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={"outline"}>Назад</Button>
                    </DialogClose>
                    <Button
                        onClick={load}
                        disabled={isDisabled}
                    >
                    {isPending ? "Загружаем" : "Стать гидом"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};