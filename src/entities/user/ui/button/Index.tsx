import {FC} from "react";
import style from "./style.module.css"
import next from "@/shared/assets/icons/next-secondary.svg";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {useUser} from "@/entities";
import {ContributorSkeleton} from "@/shared/ui";
import {useSafeAvatar} from "@/shared/utils";
import fallbackAvatar from "@/shared/assets/icons/contributor.svg";

type ContributorButtonProps = {
    contributorId: number
}

export const Index: FC<ContributorButtonProps> = ({contributorId}) => {

    const navigate = useNavigate()
    const {user, isLoading} = useUser(contributorId)
    const {safeAvatar, handler} = useSafeAvatar(user.avatar, fallbackAvatar)

    if (isLoading || !user) return <ContributorSkeleton/>

    return (
        <div
            onClick={() => navigate(`/${RouteNames.CONTRIBUTOR}/${contributorId}/${encodeURIComponent(user.name)}`)}
            className={style.container}
        >
            <div className={"my-auto"}>
                <img
                    width={48}
                    height={48}
                    className={"rounded-full"}
                    alt={"contributor"}
                    src={safeAvatar}
                    onError={handler}
                />
            </div>
            <div className={style.desc}>
                <span className={style.name}>{user.name}</span>
                <span>Представитель команды гидов</span>
            </div>
            <img width={24} height={24} alt={"next"} src={next}/>
        </div>
    );
};