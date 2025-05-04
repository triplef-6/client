import {FC} from "react";
import {ContributorLayout} from "@/entities";
import {useParams} from "react-router-dom";

export const ContributorPage: FC = () => {
    const {id} = useParams<{ id: string, title: string }>()
    return <ContributorLayout contributorId={Number(id)}/>
};