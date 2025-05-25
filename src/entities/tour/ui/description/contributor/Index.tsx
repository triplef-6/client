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
    const {data: contributor, isLoading} = useUser(contributorId)

    if (isLoading || !contributor) return <ContributorSkeleton/>

    const {safeAvatar, handler} = useSafeAvatar(contributor.avatar, fallbackAvatar)

    return (
        <div className={style.container}>
            <div className={style.info}>
                <div
                    onClick={() => navigate(`/${RouteNames.CONTRIBUTOR}/${contributorId}/${encodeURIComponent(contributor.name)}`)}
                    className={style.name}
                >
                    <span>{contributor.name} – представитель команды гидов</span>
                    <img width={20} height={20} alt={"next"} src={next}/>
                </div>
                <p className={style.desc}>{contributor.info}</p>
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
                        <Marker value={contributor.rating}/>
                    </div>
                </div>
            </div>
        </div>
    );
};