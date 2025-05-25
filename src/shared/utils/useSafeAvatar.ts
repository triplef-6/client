import {useState} from "react";
import fallbackAvatar from "@/shared/assets/icons/avatar.svg";

export const useSafeAvatar = (avatar: string, fallback = fallbackAvatar) => {

    const [avatarError, setAvatarError] = useState(false)

    const handleImageError = () => setAvatarError(true)
    const avatarSrc = avatar && !avatarError ? avatar : fallback

    return {
        safeAvatar: avatarSrc,
        handler: handleImageError
    }

}