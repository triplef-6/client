import {FC, ReactNode, useEffect, useMemo, useState} from "react";
import {EditContext} from "./context.ts";
import {IMe} from "@/shared/types";
import {useAuthContext, useUpdateMe} from "@/features";

export const EditProvider: FC<{children: ReactNode}> = ({children}) => {

    const {user} = useAuthContext()
    const {mutate: update} = useUpdateMe()
    const [updatedUser, setUpdatedUser] = useState<IMe>(user)
    
    const [isDisabledVk, setIsDisabledVk] = useState<boolean>(false)
    const [isDisabledTg, setIsDisabledTg] = useState<boolean>(false)
    const [isDisabledPhone, setIsDisabledPhone] = useState<boolean>(false)

    const context = useMemo(() => ({
        isDisabled: isDisabledVk || isDisabledTg || isDisabledPhone,
    }), [isDisabledPhone, isDisabledTg, isDisabledVk])

    useEffect(() => setUpdatedUser(updatedUser), [updatedUser])

    const load = () => update(updatedUser)
    
    return (
        <EditContext.Provider value={{
            context,
            updatedUser,setUpdatedUser,
            setIsDisabledVk, setIsDisabledTg, setIsDisabledPhone, load
        }}>
            {children}
        </EditContext.Provider>
    );
};