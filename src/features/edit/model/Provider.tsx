import React, {FC, ReactNode, useEffect, useMemo, useState} from "react";
import {EditContext} from "./context.ts";
import {IMe, RouteNames, UserRole} from "@/shared/types";
import {useMe, useUpdateMe} from "@/features";
import {useTags} from "@/entities";
import defaultAvatar from "@/shared/assets/icons/avatar.svg";
import {useNavigate} from "react-router-dom";
import {areEqualMe} from "@/shared/utils";
import {EditContextValue} from "@/features/edit/model/types.ts";

export const EditProvider: FC<{children: ReactNode}> = ({children}) => {

    const navigate = useNavigate()

    const {me} = useMe()
    const {mutate: update,} = useUpdateMe()
    const {
        data: tags = [],
        isLoading: isTagsLoading,
        isPlaceholderData: isPlaceholderTags,
        isError: isErrorTags
    } = useTags()

    const [isSuccessLoad, setIsSuccessLoad] = useState<boolean>(false)
    const [updatedMe, setUpdatedMe] = useState<IMe>(me)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    useEffect(() => {
        if (!areEqualMe(me, updatedMe)) setIsDisabled(false)
        else setIsDisabled(true)
    }, [updatedMe])

    const updateName = (name: string) => setUpdatedMe({...updatedMe, name})
    const updateSurname = (surname: string) => setUpdatedMe({...updatedMe, surname})
    const updateInfo = (info: string) => setUpdatedMe({...updatedMe, info})

    const updateImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null
        if (file !== null) {
            setUpdatedMe({
                ...updatedMe,
                avatarFile: file,
                avatar: file ? URL.createObjectURL(file) : defaultAvatar
            })
        }
    }

    const addTag = (tag: string) => {
        setUpdatedMe({
            ...updatedMe,
            tags: updatedMe.tags.includes(tag) ? updatedMe.tags : [...updatedMe.tags, tag]
        })
    }

    const removeTag = (tag: string) => {
        setUpdatedMe({
            ...updatedMe,
            tags: updatedMe.tags.filter((t: string) => t !== tag)
        })
    }

    const load = () => {
        setIsDisabled(true)
        update(updatedMe, {
            onSuccess: () => {
                setIsSuccessLoad(true)
                setTimeout(() => setIsSuccessLoad(false), 3000)
            }
        })
    }

    const goBack = () => navigate(`/${RouteNames.PROFILE}`)

    const context: EditContextValue = useMemo(() => ({
        me: updatedMe,
        isGuide: me.role === UserRole.guide,
        isDisabled,
        isSuccessLoad,
        tags,
        myTags: updatedMe.tags,
        isTagsLoading,
        isErrorTags,
        isPlaceholderTags,
    }), [me, updatedMe, isDisabled, isSuccessLoad, tags, isTagsLoading, isErrorTags, isPlaceholderTags])
    
    return (
        <EditContext.Provider value={{
            context,
            load, goBack,
            updateName, updateSurname, updateInfo, updateImage, setIsDisabled,
            setMe: setUpdatedMe,
            addTag, removeTag
        }}>
            {children}
        </EditContext.Provider>
    );
};