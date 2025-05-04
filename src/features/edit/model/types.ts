export type EditContextType = {
    context: {
        isDisabled: boolean
    }
    setIsDisabledVk: (value: boolean) => void
    setIsDisabledTg: (value: boolean) => void
    setIsDisabledPhone: (value: boolean) => void
}