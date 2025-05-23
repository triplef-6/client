import {FC} from "react";
import {Skeleton} from "@/shared/ui";

export const SidebarSkeleton: FC = () => {
    return <Skeleton className={"w-full lg:w-80 h-80 rounded-2xl"}/>
};