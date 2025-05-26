import {FC} from "react";
import next from "@/shared/assets/icons/next-secondary.svg";
import style from "./style.module.css"
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {Marker} from "@/shared/ui/rating/Marker.tsx";
import {useUser} from "@/entities";
import {ContributorSkeleton} from "@/shared/ui";
import {useSafeAvatar} from "@/shared/utils";
import fallbackAvatar from "@/shared/assets/icons/contributor.svg";

type ContributorProps = {
    contributorId: number
}

export const Index: FC<ContributorProps> = ({contributorId}) => {

    const navigate = useNavigate()
    const {user, isLoading} = useUser(contributorId)
    const {safeAvatar, handler} = useSafeAvatar(user.avatar, fallbackAvatar)
    const link: string = `/${RouteNames.CONTRIBUTOR}/${contributorId}/${encodeURIComponent(user.name)}`

    if (isLoading || !user) return <ContributorSkeleton/>

    return (
        <div className={style.container}>
            <div className={style.info}>
                <div
                    onClick={() => navigate(link)}
                    className={style.name}
                >
                    <span>{user.name} – представитель команды гидов</span>
                    <img width={20} height={20} alt={"next"} src={next}/>
                </div>
                <p className={style.desc}>{user.info}</p>
            </div>
            <div className={style.avatar}>
                <div className={style.icon}>
                    <img
                        width={48}
                        height={48}
                        alt={"contributor"}
                        className={"rounded-full"}
                        src={safeAvatar}
                        onError={handler}
                    />
                    <div className={style.marker}>
                        <Marker value={user.rating}/>
                    </div>
                </div>
            </div>
        </div>
    );
};