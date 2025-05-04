import {FC, ReactNode, useMemo, useState} from "react";
import {EditContext} from "./context.ts";

export const EditProvider: FC<{children: ReactNode}> = ({children}) => {

    const [isDisabledVk, setIsDisabledVk] = useState<boolean>(false)
    const [isDisabledTg, setIsDisabledTg] = useState<boolean>(false)
    const [isDisabledPhone, setIsDisabledPhone] = useState<boolean>(false)

    const context = useMemo(() => ({
        isDisabled: isDisabledVk || isDisabledTg || isDisabledPhone
    }), [isDisabledPhone, isDisabledTg, isDisabledVk])
    
    return (
        <EditContext.Provider value={{context, setIsDisabledVk, setIsDisabledTg, setIsDisabledPhone}}>
            {children}
        </EditContext.Provider>
    );
};