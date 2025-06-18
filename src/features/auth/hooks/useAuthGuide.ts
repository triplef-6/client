import {useCreateGuide, useSendCode} from "@/features";
import {useEffect, useState} from "react";
import {unmaskPhoneRu} from "@/shared/lib";

type ResultType = {
    isPending: boolean
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    isDisabled: boolean
    setIsCorrectedPhone: (value: boolean) => void
    setIsCorrectedInfo: (value: boolean) => void
    info: string
    setInfo: (value: string) => void
    setPhone: (value: string) => void
    load: () => void
    sendCode: () => void
    opt: string
    updateOpt: (value: string) => void
    timeLeft: number
    isActiveTimer: boolean
    resetTimer: () => void
    isShowOpt: boolean
    isCorrectedPhone: boolean
}

export const useAuthGuide = (): ResultType => {

    const {mutate: createGuide, isPending} = useCreateGuide()
    const {mutate: sendPhone} = useSendCode()

    const [info, setInfo] = useState<string>("Я гид, сильно увлеченный своим делом.")
    const [phone, setPhone] = useState<string>("")
    const [opt, setOpt] = useState<string>("")

    const [isCorrectedPhone, setIsCorrectedPhone] = useState<boolean>(true)
    const [isCorrectedInfo, setIsCorrectedInfo] = useState<boolean>(true)

    const [timeLeft, setTimeLeft] = useState<number>(60)
    const [isActiveTimer, setIsActiveTimer] = useState<boolean>(false)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isShowOpt, setIsShowOpt] = useState<boolean>(false)

    useEffect(() => {
        if (!isOpen) {
            setPhone("")
            setOpt("")
            setInfo("Я гид, сильно увлеченный своим делом.")
            setIsCorrectedPhone(true)
            setIsCorrectedInfo(true)
            setTimeLeft(60)
            setIsActiveTimer(false)
            setIsShowOpt(false)
        }
    }, [isOpen])

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isActiveTimer && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000)
        }
        if (timeLeft === 0) setIsActiveTimer(false)
        return () => clearTimeout(timer)
    }, [isActiveTimer, timeLeft])

    const resetTimer = () => {
        if (!isShowOpt) setIsShowOpt(true)
        setTimeLeft(60)
        setIsActiveTimer(true)
    }

    const sendCode = () => {
        resetTimer()
        const clearPhone = unmaskPhoneRu(phone)
        sendPhone(clearPhone)
    }

    const load = () => createGuide({ phone, info, code: opt}, {
        onSuccess: () => setIsOpen(false),
        onError: () => setIsOpen(false)
    })

    return {
        isOpen, info, isPending, opt, timeLeft, isActiveTimer, isShowOpt,
        isDisabled: isCorrectedPhone || isCorrectedInfo || opt.length !== 6,
        isCorrectedPhone,
        setIsOpen, setIsCorrectedInfo, setIsCorrectedPhone, setInfo, setPhone, load, sendCode, resetTimer,
        updateOpt: setOpt
    }

}