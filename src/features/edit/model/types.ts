import {IMe} from "@/shared/types";

export type EditContextType = {
    context: {
        isDisabled: boolean
    }
    updatedUser: IMe
    setUpdatedUser: (value: IMe) => void
    load: () => void
    setIsDisabledVk: (value: boolean) => void
    setIsDisabledTg: (value: boolean) => void
    setIsDisabledPhone: (value: boolean) => void
}