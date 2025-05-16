import {useEditContext} from "@/features";
import {useTags} from "@/entities";
import React from "react";
import {IMe, UserRole} from "@/shared/types";
import defaultAvatar from "@/shared/assets/icons/avatar.svg"

type Result = {
    isContributor: boolean
    user: IMe

    tags: string[]
    userTags: string[]

    updateName: (value: string) => void
    updateSurname: (value: string) => void
    updateInfo: (value: string) => void
    updateImage: (event: React.ChangeEvent<HTMLInputElement>) => void

    addTag: (value: string) => void
    removeTag: (value: string) => void
}

export const useUserData = (): Result => {

    const {updatedUser, setUpdatedUser} = useEditContext()
    const {data: tags = []} = useTags()

    const updateName = (name: string) => setUpdatedUser({...updatedUser, name})
    const updateSurname = (surname: string) => setUpdatedUser({...updatedUser, surname})
    const updateInfo = (info: string) => setUpdatedUser({...updatedUser, info})

    const updateImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null
        setUpdatedUser({
            ...updatedUser,
            avatarFile: file,
            avatar: file ? URL.createObjectURL(file) : defaultAvatar
        })
    }

    const addTag = (tag: string) => {
        setUpdatedUser({
            ...updatedUser,
            tags: updatedUser.tags.includes(tag) ? updatedUser.tags : [...updatedUser.tags, tag]
        })
    }

    const removeTag = (tag: string) => {
        setUpdatedUser({
            ...updatedUser,
            tags: updatedUser.tags.filter((t: string) => t !== tag)
        })
    }

    return {
        isContributor: updatedUser.role === UserRole.contributor,
        user: updatedUser,
        tags,
        userTags: updatedUser.tags,
        addTag, removeTag, updateName, updateSurname, updateInfo, updateImage
    }

}