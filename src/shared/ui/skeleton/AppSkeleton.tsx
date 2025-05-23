import {FC} from "react";
import {Skeleton} from "@/shared/ui";

export const AppSkeleton: FC = () => {
    return (
        <div className="flex flex-col space-y-3 w-full">
            <Skeleton className="h-44 w-full rounded-2xl"/>
            <Skeleton className="h-6 w-4/5 rounded-2xl"/>
            <Skeleton className="h-6 w-2/3 rounded-2xl"/>
            <Skeleton className="h-44 w-full rounded-2xl max-md:hidden"/>
            <Skeleton className="h-6 w-4/5 rounded-2xl max-md:hidden"/>
            <Skeleton className="h-6 w-2/3 rounded-2xl max-md:hidden"/>
        </div>
    );
};